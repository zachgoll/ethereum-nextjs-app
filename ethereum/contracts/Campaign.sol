pragma solidity ^0.4.17;

contract CampaignFactory {
    // List of all addresses of deployed campaigns 
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public {
        // Create new campaign with minimum contribution setting
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

/*

This is a crowdfunding campaign contract which will model Kickstarter.
For every new campaign, we must deploy a new instance of the contract, which
creates a few problems.  If our application is deploying the contract, then
we must pay every time a user tries to create a new campaign.  If we let the user
create their own contract, we run the risk that they may modify the code maliciously.

The solution is to create a "Factory" contract which will deploy the Crowdfunding
contract.  That contract is above ^

*/

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        // How many people who have provided approvals 
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    
    // mapping where the key is the address, and the value is boolean
    // Unused mappings will return a default value
    // If approver has donated to contract, store true as value
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        // This is where the code is virtually pasted 
        _;
    }
    
    function Campaign(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        // Set approvers value to true for anyone who contributes to the campaign
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        
        /*
        Create new request instance
        Type is Request, newRequest is variable, and Request({}) is new instance
        Recommended way of creating new instance of a struct (key:value method)
        Need to add memory keyword because we want a new COPY -- not to alter original
        Don't need to initialize a reference type such as mapping
        */
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        
        /*
        // Could also write (referring to above)
        Request(description, value, recipient, complete);
        */
        
        // Add to our requests array
        requests.push(newRequest);
    }
    
    function approveRequest(uint indexOfRequest) public {
        // We want the original, not a copy 
        Request storage request = requests[indexOfRequest];
        
        // If we get back false, then that means this address has not contributed
        // to the campaign and the function should exit immediately
        require(approvers[msg.sender]);
        
        // Make sure this address hasn't voted already
        require(!request.approvals[msg.sender]);
        
        // Mark this address as "voted" 
        request.approvals[msg.sender] = true;
        
        // Add 1 to the approval count for this request
        request.approvalCount++;
    }
    
    // Uses restricted modifier (only contract owner)
    function finalizeRequest(uint indexOfRequest) public restricted {
        Request storage request = requests[indexOfRequest];
        
        // If it has been completed already, exit 
        require(!request.complete);
        
        // Require that more than 50% of the approvers voted for request
        require(request.approvalCount > (approversCount / 2));
        
        
        // If hasn't been completed and enough approvals, set to complete and payout
        // Note that the total funds in contract must be greater than request.value
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
    
}
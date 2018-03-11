const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let campaign;

// Before each test, deploy the factory contract
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  // Method 1 - Getting contract instance before it is deployed
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: 1000000
  });

  // ES6 shortcut
  // The right side will return an array, and we will take the first value in the array
  // and assign it to campaignAddress variable
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  // Method 2 - Getting contract instance when it is already deployed
  // Pass the ABI and address to get a contract at an address
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );

  //factory.setProvider(provider);
  //campaign.setProvider(provider);
});

describe("Campaigns Testing", () => {
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it("manager is accounts[0]", async () => {
    const manager = await campaign.methods.manager().call();
    assert.equal(manager, accounts[0]);
  });

  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "200",
      from: accounts[1]
    });

    // should be a boolean value
    const isContributor = await campaign.methods.approvers(accounts[1]).call();

    assert(isContributor);
  });

  it("requires a minimum contribution", async () => {
    // try/catch useful when looking for a failure of a contract call
    try {
      // Should fail - does not meet the minimum contribution of contract
      await campaign.methods.contribute().send({
        from: accounts[1],
        value: "5"
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it("allows a manager to make a payment request", async () => {
    await campaign.methods
      // Request funds of 100 wei will be sent to accounts[1]
      .createRequest("Buy Car Batteries", "100", accounts[1])
      .send({
        // manager
        from: accounts[0],
        gas: "2000000"
      });

    const request = await campaign.methods.requests(0).call();

    assert.equal("Buy Car Batteries", request.description);
  });

  it("processes requests", async () => {
    let initialBalance = await web3.eth.getBalance(accounts[1]);
    initialBalance = web3.utils.fromWei(initialBalance, "ether");
    initialBalance = parseFloat(initialBalance);

    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether")
    });

    await campaign.methods
      .createRequest(
        "A Description",
        web3.utils.toWei("5", "ether"),
        accounts[1]
      )
      .send({
        from: accounts[0],
        gas: "1000000"
      });

    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });

    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });

    // This will return us a balance in string format - need to convert to float in ether
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = web3.utils.fromWei(balance, "ether");
    balance = parseFloat(balance);
  });
});

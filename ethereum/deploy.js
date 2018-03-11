/*

This deployment has been run and contract generated at
0x450c1f376f4B85Aa6773D9A8859fD8F7375aEedd

*/

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const config = require("./config");

// We do not need to import Campaign because all we need to deploy is the
// factory.  The Factory will then deploy Campaigns on its own.
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(config.seed, config.infura);

const web3 = new Web3(provider);
// Writing a function just so we can use async/await since this requires a functionc
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account: ", accounts[0]);

  // Requires javascript object, so must convert from JSON => Javascript
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode
    })
    .send({
      from: accounts[0],
      gas: "1000000"
    });

  // Use this information to connect to the contract on the front-end
  console.log("Contract deployed to: ", result.options.address);
};

deploy();

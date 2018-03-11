/**
 * 1. Delete build/ if it exists
 * 2. Read Campaign.sol from contracts folder
 * 3. Compile contracts
 * 4. Write compilation output to build/
 */
const path = require("path");
const solc = require("solc");
// fs-extra allows for removing all files in a folder at once
const fs = require("fs-extra");

// Remove if exists
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
const output = solc.compile(source, 1).contracts;

// Make sure build/ exits, and if not, create it
fs.ensureDirSync(buildPath);

// for:in loop iterates over keys in an object
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}

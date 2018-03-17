import Web3 from "web3";

let web3;

/**
 * A convenient way of checking whether we are in the browser
 * or on the server.
 *
 * In the node console, `typeof window` returns 'undefined'
 * In the browser, `typeof window` returns Object
 */
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and Metamask is installed and running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server or user not running Metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.INFURA
  );

  web3 = new Web3(provider);
}

export default web3;
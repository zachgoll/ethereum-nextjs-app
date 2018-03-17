## Installation

```
git clone https://github.com/zachgoll/ethereum-nextjs-app.git
cd ethereum-nextjs-app
npm install
```

## Setting env variables

Since we are working with sensitive account information, we need to set some environment variables.  Create a new `.env` file and place the following in it: 

```
// .env

SEED="<your-metamask-seed-phrase>"
INFURA="<your-infura-api-endpoint>"
```

If you already have your smart contract deployed, you can add that to the `.env` file and run `npm run start` to run the app.

```
// .env

SEED="<your-metamask-seed-phrase>"
INFURA="<your-infura-api-endpoint>"
CONTRACT="<your-deployed-contract-address>"
```

## Changing the Smart Contract

Once you have a working smart contract or have made changes appropriately, you need to compile and deploy.

```
node ethereum/compile.js
node ethereum/deploy.js
```

You will now see the new contract's address in your console. Add this to your `.env` file.

```
// .env

SEED="<your-metamask-seed-phrase>"
INFURA="<your-infura-api-endpoint>"
CONTRACT="<your-deployed-contract-address>"
```

Now, you can restart the server with `npm run start`

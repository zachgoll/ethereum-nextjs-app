## Getting Started

```
https://github.com/zachgoll/ethereum-nextjs-app.git
cd ethereum-nextjs-app
npm install
npm run start
```

## Changing the Smart Contract

First, set your environment variables

```
export SEED="your metamask seed phrase"
export INFURA="your infura api key"
```

Once changes have been made to the contract, you need to compile and deploy.

```
node ethereum/compile.js
node ethereum/deploy.js
```

You will now see the new contract's address in your console. Set this as a new env variable.

```
export CONTRACT="new contract address"
```

Now, you can restart the server with `npm run start`

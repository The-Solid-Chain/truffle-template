# Truffle Template

Sample template with truffle configuration and several networks deployment.

# Networks

- Ethereum: Mainnet and Ropsten
- Binance Smart Chain: Mainnet and Testnet
- Optimism: Mainnet and Kovan

# Configuration of required keys

The configuration of the required keys is done by create a *.env* file at the root of the project. The format of this file is:

```KEY=VALUE```

An template is provided in *dotenv-template*, please fill the values in and rename it to *.env*. The *.env* file is ignored by *.gitignore* and never commited to the repository.

# Local fork

The package provides the ability to fork existing networks locally through:

```$ npm run ganache:$(network)```

Where network can be one of the following:

- bsc-local-testnet: local fork of BSC testnet
- bsc-local-mainnet: local fork of BSC mainnet
- eth-local-ropsten: local fork of Ethereum Ropsten
- eth-local-mainnet: local fork of Ethereum Mainnet
- optimistic-local-kovan: local fork of Optimistic Kovan
- optimistic-local-mainnet: local fork of Optimistic Mainnet 

# Optimism

The package supports deploying to the Optimism network. You can run a local node and then migrate with:

```$ npm run migrate:optimistic-local-node```

Or you can fork one of the available networks as explained in the **Local fork** section.

# Author

My name is Roberto Cano and you can find me at https://github.com/gabr1e11
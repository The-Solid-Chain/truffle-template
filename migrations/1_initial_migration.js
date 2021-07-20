const Artifactor = require('@truffle/artifactor');
const artifactor = new Artifactor(`${__dirname}/../build/contracts`);

/**
 * Artifacts to be included in the artifactor for later use in the scripts
 */
const ExternalArtifacts = {
    //PancakeFactory: require('@pancakeswap2/pancake-swap-core/build/PancakeFactory.json'),
    //PancakeRouter: require('@theanthill/pancake-swap-periphery/build/PancakeRouter.json'),
};
async function setupExternalArtifacts()
{
    for await ([contractName, contractArtifact] of Object.entries(ExternalArtifacts)) {
        await artifactor.save({
            contractName,
            ...contractArtifact,
        });
    }
}

const Migrations = artifacts.require('Migrations');

module.exports = async function (deployer, network) {
  
    await setupExternalArtifacts();

    await deployer.deploy(Migrations);
};
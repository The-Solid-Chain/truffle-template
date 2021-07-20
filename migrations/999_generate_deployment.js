/**
 * Generates a json file with all the deployments to connect the contracts to the frontend
 */
const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

/**
 * Contracts to be exported
 */
const contracts = ['Migrations'];

// ============ Main Migration ============
module.exports = async (deployer, network, accounts) => {
    // Deployments
    const deployments = {};

    const exportedArtifacts = contracts.map((name) => artifacts.require(name));

    for (const artifact of exportedArtifacts) {
        console.log(`Exporting artifact: ${artifact.contractName} at address ${artifact.address}`);
        deployments[artifact.contractName] = {
            address: artifact.address,
            abi: artifact.abi,
        };
    }

    const deploymentPath = path.resolve(__dirname, `../deployments/deployments.${network}.json`);
    await writeFile(deploymentPath, JSON.stringify(deployments, null, 2));

    console.log(`Exported all deployments to ../deployments/deployments.${network}.json`);
};

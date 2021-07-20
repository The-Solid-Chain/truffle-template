var fs = require('fs');

function exportContract(name, address) {
    fs.writeFileSync(
        'build/contracts/' + name + '.json',
        JSON.stringify({
            contractName: name,
            address: address,
        })
    );
}

function exportToken(name, address, decimals) {
    fs.writeFileSync(
        'build/contracts/' + name + '.json',
        JSON.stringify({
            contractName: name,
            address: address,
            decimals: decimals,
        })
    );
}

module.exports = {
    exportToken,
    exportContract,
};

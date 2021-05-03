require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain uncover hover arctic obscure tree'; 
let testAccounts = [
"0x4adf476eb1f8b849ebd559ebd5bb4f0f6fa298f957a8e74609ff92aa5eb1db96",
"0x2e18c01a6818511630f951179a3a438730de25109081604156c49d1714752596",
"0x287100c9081932898279200ae23393f63c8964dd922da6f4fa30e8b3a1b22fd0",
"0xdcc91ac7cdab47ae3eaebc4cab1061b604f39c4dcb5b018d9047b2631a2421da",
"0x49f0a7e8800d62b868151bc9f5c9398cd5930c175e39e38dd61e8d9749982572",
"0x2a4d2e3b059bfd98653a9e52904e4201812b7fcba543b5ed6d6d05b3963f0811",
"0xe532aad9c75fee68124f3f659c2f9a40589f465b45d1b8f6c6f0126e7d3fa2b6",
"0x53d2060b151a222cc9ece3112864cb911b1042e8521130ec3337871eb34d4157",
"0xc586e23f5037a98720fa6a85a5b269eddccc91009814e0ffbca0819fd869b2be",
"0x25be0371442279ede9ee4fa136f930aef4be912adfc88a428bd8a4c738051ee2"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

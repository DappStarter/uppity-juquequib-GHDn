require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name release still concert grace merry fog shield'; 
let testAccounts = [
"0xa1d9e507971ae1e3e4cbabba160481e97623e3806448e69689c186766f761c6a",
"0x8bebc2bbc69165abc213df899220a0bd127ec2b21ed4ea4b3804afd8377f642a",
"0x949342b61a73e0fb8a9a6f76f6e9c6ccc090f46b6294d0b6a97ace00d530e1aa",
"0x3b9a1b076b65168f6a61d072b037536f9018254eb026ef87f22beebef0fe1405",
"0x071a7ba1fb805ea42c96afae2a3c224bb25609919ee9a66a59fb26346a12724b",
"0x95071ae23a2bade3b420803063002f41cc2bae34c1c198e116157a87924663b8",
"0xb898456e256c044e4173e75e7be65acdfb5c1db4dcf0378da7c143fd2e023530",
"0xc267f085d2c1fda475eee7d730db60e02ed83950a3f216444accd8b8e3d2c638",
"0x7f0f75ed981eaae51845ac6783bb47456791b65a3bbfcc51920b210fddaae16d",
"0x80be93cdec1267bd277a1b0dd4349bd05a8cbf8237b31bde8a59ab28133f6ffa"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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


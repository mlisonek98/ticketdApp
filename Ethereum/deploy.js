const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/TicketsFactory.json')

const provider = new HDWalletProvider(
  'game saddle oyster laundry equal loop lunch allow cactus endless hover unfair',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

//deployed address
//0x1c81faa36Ce86ADf5174E14840183600778269FC

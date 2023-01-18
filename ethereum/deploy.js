const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
// const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'hotel orbit track card slow visual fork over quality draft garbage effort',
	'https://rinkeby.infura.io/v3/xxx'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);

	// const result = await new web3.eth.Contract(JSON.parse(interface))
	//     .deploy({ data: bytecode, arguments: ['Hi, there!'] })
	//     .send({gas: '1000000', from: accounts[0] });

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		// const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: '0x' + compiledFactory.bytecode })
		.send({ from: accounts[0] });

	// console.log(interface);
	console.log('Contract deployed to', result.options.address);
};

deploy();

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); //general fs module hard to delete multiple files

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); //check whether dir exists -> create dir

// console.log(output);

for (let contract in output) {
	//loop in contrats, Campaign, CampaignFactory
	fs.outputJsonSync(path.resolve(buildPath, contract.replace(':', '') + '.json'), output[contract]); //output json file
}

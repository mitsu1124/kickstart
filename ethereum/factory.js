import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x6F31f3d280c12905951A550258e12cd06FC77E27'
);

export default instance;

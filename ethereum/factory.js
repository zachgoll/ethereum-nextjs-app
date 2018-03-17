import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
import { contract } from '../env';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  contract
);

export default instance;
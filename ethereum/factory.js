import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x450c1f376f4B85Aa6773D9A8859fD8F7375aEedd"
);

export default instance;

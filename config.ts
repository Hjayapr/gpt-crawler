import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.federalcompass.com/federal-government-awarded-contracts",
  match: "https://www.federalcompass.com/award-contract-detail/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};

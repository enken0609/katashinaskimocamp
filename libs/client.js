import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.Service_Domain,
  apiKey: process.env.API_KEY,
});

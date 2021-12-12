import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'katashinaskimocamp',
  apiKey: process.env.API_KEY,
});

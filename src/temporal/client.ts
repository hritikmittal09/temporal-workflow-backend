import { Connection, Client } from '@temporalio/client';


export const getTemporalClient = async () => {
  const connection = await Connection.connect({
    address: process.env.address as string,
    tls: true,
    apiKey : process.env.apikey as string 
    },
  );

  return new Client({
    connection,
    namespace: process.env.name as string,
  });
};
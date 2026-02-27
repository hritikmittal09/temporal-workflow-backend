import { Connection, Client } from '@temporalio/client';

export const getTemporalClient = async () => {
  const connection = await Connection.connect({
    address: process.env.TEMPORAL_ADDRESS as string,
    tls: {
      clientCertPair: {
        crt: Buffer.from(process.env.TEMPORAL_CERT as string),
        key: Buffer.from(process.env.TEMPORAL_KEY as string),
      },
    },
  });

  return new Client({
    connection,
    namespace: process.env.TEMPORAL_NAMESPACE as string,
  });
};
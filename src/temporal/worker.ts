import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS as string,
    tls: {
      clientCertPair: {
        crt: Buffer.from(process.env.TEMPORAL_CERT as string),
        key: Buffer.from(process.env.TEMPORAL_KEY as string),
      },
    },
  });

  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'default',
    namespace: process.env.TEMPORAL_NAMESPACE as string,
    connection,
  });

  await worker.run();
}

run().catch(console.error);
import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
  const connection = await NativeConnection.connect({
    address: process.env.address as string,
    tls:true,
    apiKey : process.env.apikey
    },
  );

  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'api-task-queue',
    namespace: process.env.name,
    connection,
  });

  await worker.run();
}

run().catch(console.error);
import { fetchApiWorkflow } from '../temporal/workflows';
import { getTemporalClient } from '../temporal/client';

export const startWorkflow = async () => {
  const client = await getTemporalClient();

  const handle = await client.workflow.start(fetchApiWorkflow, {
    taskQueue: 'api-task-queue',
    workflowId: 'test-' + Date.now(),
    args: ['Flowy'],
  });

  console.log('✅ Workflow started:', handle.workflowId);
   


  return {
    workflowId: handle.workflowId,
    runId: handle.firstExecutionRunId,
    
  };
};
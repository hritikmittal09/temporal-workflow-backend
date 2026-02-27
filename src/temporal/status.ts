import { getTemporalClient } from '../temporal/client';

export const status = async (workflowId: string) => {
  try {
    const client = await getTemporalClient();
    const handle = client.workflow.getHandle(workflowId);

    // Non-blocking call
    const desc = await handle.describe();

    // ✅ If workflow is COMPLETED → return result
    if (desc.status.name === 'COMPLETED') {
      const result = await handle.result();

      return {
        workflowId,
        status: desc.status.name,
        startTime: desc.startTime,
        closeTime: desc.closeTime ?? null,
        result,
      };
    }

    // ❌ If workflow is NOT completed → no result
    return {
      workflowId,
      status: desc.status.name, // RUNNING | FAILED | TERMINATED | CANCELED
      startTime: desc.startTime,
      message: 'Workflow is not complete yet',
    };
  } catch (error: any) {
    return {
      workflowId,
      status: 'NOT_FOUND',
      message: error.message,
    };
  }
};
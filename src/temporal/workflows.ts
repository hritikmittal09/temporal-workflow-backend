// Define your workflow in a separate file
import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities";

const { fetchPublicApi } = proxyActivities<typeof activities>({
  startToCloseTimeout: "30 seconds",
});

export async function helloWorkflow(name: string): Promise<string> {
  return `Hello, ${name} from Temporal!`;
}


export async function fetchApiWorkflow(name): Promise<any> {
  const result = await fetchPublicApi();
  return result
}
import { Injectable } from '@nestjs/common';
import { startWorkflow } from './start-workflow';
import { status } from './status';
@Injectable()
export class TemporalService {
  async startHelloWorkflow() {
    return startWorkflow()
  }
  async workflowStatus(id){
    return  status(id)

  }
}
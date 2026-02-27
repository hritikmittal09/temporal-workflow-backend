import { Controller, Get ,Post,Query } from '@nestjs/common';
import { TemporalService } from './temporal.service';


@Controller('temporal')
export class TemporalController {
  constructor(private readonly temporalService: TemporalService) {}

  @Get('start')
  async startWorkflow() {
    return this.temporalService.startHelloWorkflow()
  }

  @Get('status')
  async getStatus(@Query('workflowId') workflowId: string) {
    return this.temporalService.workflowStatus(workflowId)
  }
}
import { Module } from '@nestjs/common';
import { TemporalController } from './temporal.controller';
import { TemporalService } from './temporal.service';

@Module({
  controllers: [TemporalController],
  providers: [TemporalService],
})
export class TemporalModule {}
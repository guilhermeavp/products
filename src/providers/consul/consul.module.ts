import { Module } from '@nestjs/common';
import { ConsulService } from './consul.providers';

@Module({
  providers: [ConsulService],
  exports: [ConsulService],
})
export class ConsulModule {}

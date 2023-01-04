import { Module } from '@nestjs/common';
import { MySqlConfigService } from './MySqlConfigService.service';

@Module({
  providers: [MySqlConfigService],
})
export class MySqlConfigModule {}

import { Module } from '@nestjs/common';
import { PostgreSqlConfigService } from './PostgreSqlConfigService.service';

@Module({
  providers: [PostgreSqlConfigService],
})
export class PostgreSqlConfigModule {}

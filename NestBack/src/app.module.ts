import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgreSqlConfigModule } from './config/PostgreSqlConfigModule.module';
import { PostgreSqlConfigService } from './config/PostgreSqlConfigService.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [PostgreSqlConfigModule],
      useClass: PostgreSqlConfigService,
      inject: [PostgreSqlConfigService],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'commercelab',
  password: 'commercelab',
  database: 'commercelab',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};

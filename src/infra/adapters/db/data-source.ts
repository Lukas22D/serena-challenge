import { DataSource } from 'typeorm';
import User from './model/UserDB';
const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin123',
  database: 'serena',
  synchronize: true, // Usar com cautela em produção
  logging: true,
  entities: [`${__dirname}/**/src/infra/adapters/db/model/*{.ts,.js}`], 
  migrations: [`${__dirname}/**/migrations/*{.ts,.js}`]
});

export default dataSource;

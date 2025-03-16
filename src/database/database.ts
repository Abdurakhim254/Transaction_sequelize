import { Module } from '@nestjs/common';
import { databaseProviders } from './provider/database.provider';
import { Sequelize } from 'sequelize-typescript';
const sequelizeInstance = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'postgres',
  });
@Module({
    providers:[
        {
            provide:"SEQUELIZE",
            useValue:sequelizeInstance},
            ...databaseProviders,
        ],
    exports:["SEQUELIZE",...databaseProviders]
})
export class DatabaseModule {}

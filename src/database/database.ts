import { Module } from '@nestjs/common';
import { databaseProviders } from './provider/database.provider';
import { Sequelize } from 'sequelize-typescript';
const sequelizeInstance = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
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

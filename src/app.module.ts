import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database';
import { UserModule } from './user/user.module';
import { TransactionModule } from './transaction/transaction.module';




@Module({
  imports: [DatabaseModule, UserModule, TransactionModule],
})
export class AppModule {}

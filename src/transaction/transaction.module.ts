import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { UserModule } from 'src/user/user.module';
import { DatabaseModule } from 'src/database/database';

@Module({
  imports: [UserModule,DatabaseModule],
  controllers: [TransactionController],
  providers: [TransactionService],
  
})
export class TransactionModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { DotransationDto } from './dto/create-transaction.dto';


@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService,
    
    ) {}

  @Post()
  create(@Body() DoTransactionDto: DotransationDto) {
    return this.transactionService.create(DoTransactionDto);
  }


}

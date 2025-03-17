import { Inject, Injectable } from '@nestjs/common';
import { DotransationDto } from './dto/create-transaction.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/Entity/user.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class TransactionService {

  constructor(
    @Inject('USER_REPOSITORY') private userModel: typeof User,
    @Inject('SEQUELIZE') private sequelize: Sequelize 
  ){}
  async create(DoTransactionDto: DotransationDto) {
    const transaction=await this.sequelize.transaction()
    try {
      const giver = await this.userModel.findByPk(DoTransactionDto.id, { transaction });
      const receiver = await this.userModel.findByPk(DoTransactionDto.receiver_id, { transaction });

      if(giver.sum<DoTransactionDto.amount){
        throw new Error('Not enough money')
      } 


      await giver.decrement('sum', { by: DoTransactionDto.amount, transaction });
      await receiver.increment('sum', { by: DoTransactionDto.amount, transaction });

      await transaction.commit();

      return{
        giver,
        receiver
      }








      

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

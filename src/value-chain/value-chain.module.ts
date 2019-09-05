import { Module } from '@nestjs/common';
import { ValueChainController } from './value-chain.controller';
import { ValueChainService } from './value-chain.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../category/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [ValueChainController],
  providers: [ValueChainService],
})
export class ValueChainModule {}

import { Controller, Get } from '@nestjs/common';
import { ValueChainService } from './value-chain.service';

@Controller('api/value-chain')
export class ValueChainController {
  constructor(private readonly valueChainService: ValueChainService) {}

  @Get()
  findAll() {
    return this.valueChainService.findAll();
  }
}

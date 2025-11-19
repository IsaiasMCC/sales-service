import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/create-sale.dto';
import { SalesService } from '../services/sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() body: CreateSaleDto) {
    return this.salesService.create(body);
  }

  @Get()
  findAll() {
    return this.salesService.findAll();
  }
}

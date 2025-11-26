import { Module } from '@nestjs/common';
import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity';
import { SaleDetail } from './entities/sale_detail.entity';
import { SalesMemoryRepository } from './repositories/sales-memory.repository';

@Module({
 providers: [SalesService, SalesMemoryRepository],
  controllers: [SalesController],
  // imports: [TypeOrmModule.forFeature([Sale, SaleDetail])],
})
export class SalesModule {}

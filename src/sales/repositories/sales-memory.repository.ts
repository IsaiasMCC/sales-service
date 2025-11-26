import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/create-sale.dto';
import { CreateSaleDetailDto } from '../dtos/create-sale-detail.dto';
import { Sale, SaleDetail } from '../models/sale.model';

@Injectable()
export class SalesMemoryRepository {
  private sales: Sale[] = [];
  private saleId = 1;
  private detailId = 1;

  findAll(): Sale[] {
    return this.sales;
  }

  create(data: CreateSaleDto): Sale {
    const sale: Sale = {
      id: this.saleId++,
      total: data.total,
      user_id: data.user_id,
      client_id: data.client_id,
      details: data.details.map((d) => ({
        id: this.detailId++,
        sale_id: this.saleId - 1,
        ...d,
      })),
    };

    this.sales.push(sale);
    return sale;
  }
}

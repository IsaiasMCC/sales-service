import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/create-sale.dto';
import { SalesMemoryRepository } from '../repositories/sales-memory.repository';

@Injectable()
export class SalesService {
  constructor(private readonly repo: SalesMemoryRepository) { }

  create(data: CreateSaleDto) {
    const sale = this.repo.create(data);

    return {
      status: 'success',
      message: 'Venta creada correctamente',
      data: sale,
    };
  }

  findAll() {
    const sales = this.repo.findAll();

    return {
      status: 'success',
      message: 'Lista de ventas obtenida correctamente',
      data: sales,
    };
  }
}

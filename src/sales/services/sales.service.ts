// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Sale } from '../entities/sale.entity';
// import { Repository } from 'typeorm';
// import { CreateSaleDto } from '../dtos/create-sale.dto';

// @Injectable()
// export class SalesService {
//   constructor(
//     @InjectRepository(Sale)
//     private saleRepository: Repository<Sale>,
//   ) {}

//   create(data: CreateSaleDto) {
//     const sale = this.saleRepository.create(data);
//     return this.saleRepository.save(sale); // Guarda sale + details por cascade
//   }

//   findAll() {
//     return this.saleRepository.find({ relations: ['details'] });
//   }
// }


import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from '../dtos/create-sale.dto';

@Injectable()
export class SalesService {
  create(data: CreateSaleDto) {
    return {
      status: 'success',
      message: 'Venta creada correctamente',
      data: data,
    };
  }

  findAll() {
    return {
      status: 'success',
      message: 'Lista de ventas obtenida correctamente',
      data: [],
    };
  }
}

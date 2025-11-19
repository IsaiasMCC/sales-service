import { IsNumber, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDetailDto {

  @ApiProperty({ description: 'Cantidad del producto', example: 2 })
  @IsNumber()
  @IsPositive()
  amount: number;

  @ApiProperty({ description: 'Subtotal del detalle de venta', example: 50.5 })
  @IsNumber()
  @IsPositive()
  subtotal: number;

  @ApiProperty({ description: 'ID del producto', example: 1 })
  @IsNumber()
  @IsPositive()
  product_id: number;
}

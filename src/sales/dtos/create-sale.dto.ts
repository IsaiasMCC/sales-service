import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsPositive, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSaleDetailDto } from './create-sale-detail.dto';

export class CreateSaleDto {

  @ApiProperty({ description: 'Total de la venta', example: 150.5 })
  @IsNumber()
  @IsPositive()
  total: number;

  @ApiProperty({ description: 'ID del usuario que realiza la venta', example: 1 })
  @IsNumber()
  @IsPositive()
  user_id: number;

  @ApiProperty({ description: 'ID del cliente', example: 2 })
  @IsNumber()
  @IsPositive()
  client_id: number;

  @ApiProperty({ type: [CreateSaleDetailDto], description: 'Detalles de la venta' })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSaleDetailDto)
  details: CreateSaleDetailDto[];
}

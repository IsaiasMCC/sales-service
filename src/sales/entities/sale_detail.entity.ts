import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./sale.entity";

@Entity('sale_details')
export class SaleDetail {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'number'
    })
    amount: number;

    @Column({
        type: 'float8'
    })
    subtotal: number;

    @Column({
        type: 'number'
    })
    product_id: number;

    @ManyToOne(() => Sale, sale => sale.details)
    @JoinColumn({ name: 'sale_id' })
    sale: Sale;
}
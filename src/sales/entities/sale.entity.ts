import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaleDetail } from "./sale_detail.entity";

@Entity('sales')
export class Sale {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    date: Date;

    @Column({ type: 'float8' })
    total: number;

    @Column({
        type: 'number'
    })
    user_id: number;

    @Column({
        type: 'number'
    })
    client_id: number;

    @OneToMany(() => SaleDetail, detail => detail.sale, { cascade: true })
    details: SaleDetail[];
}

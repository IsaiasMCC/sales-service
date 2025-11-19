import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('products')
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
    })
    name: string;

    @Column({
        type: 'float8'
    })
    price: number;

    @Column({
        type: 'number'
    })
    amount: number;

    
}
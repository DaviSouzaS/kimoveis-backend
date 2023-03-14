import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Category } from "./categories.entity"
import { Address } from "./addresses.entity"

@Entity("real_estate")
export class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ default: false, nullable: true })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column()
    size: number

    @CreateDateColumn()  
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address, { nullable: false })
    @JoinColumn()
    addresses: Address 

    @ManyToOne(() => Category, { nullable: true })
    categories: Category

}
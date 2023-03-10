import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Categories } from "./categories.entity"
import { Addresses } from "./addresses.entity"

@Entity("real_estate")
export class RealEstate {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ default: false, nullable: true })
    sold: boolean

    @Column({ type: "decimal" })
    value: number

    @Column()
    size: number

    @CreateDateColumn()  
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Addresses, { nullable: false })
    @JoinColumn()
    addresses: Addresses 

    @ManyToOne(() => Categories, { nullable: true })
    categories: Categories

}
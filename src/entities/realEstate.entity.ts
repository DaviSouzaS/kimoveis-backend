import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, CreateDateColumn, 
UpdateDateColumn, 
OneToMany} from "typeorm"
import { Category } from "./categories.entity"
import { Address } from "./addresses.entity"
import { Schedule } from "./schedulesUsersProperties.entity"


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

    @CreateDateColumn({ type: "date" })  
    createdAt: string

    @UpdateDateColumn({ type: "date" })
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address 

    @ManyToOne(() => Category, { nullable: true })
    category: Category

    @OneToMany(() => Schedule, (schedules) => schedules.realEstate)
    schedules: Schedule[]
}
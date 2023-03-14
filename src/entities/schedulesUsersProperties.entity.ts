import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User  } from "./users.entity"
import { RealEstate } from "./realEstate.entity"

@Entity("schedules_users_properties")
export class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column() 
    date: Date

    @Column() 
    hour: Date

    @ManyToOne(() => RealEstate, { nullable: false }) 
    realEstate: RealEstate

    @ManyToOne(() => User, { nullable: false }) 
    users: User 
}
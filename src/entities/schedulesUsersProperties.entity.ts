import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User  } from "./users.entity"
import { RealEstate } from "./realEstate.entity"

@Entity("schedules_users_properties")
export class Schedule {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: "date"}) 
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules, { nullable: false }) 
    realEstate: RealEstate

    @ManyToOne(() => User, user => user.schedules) 
    user: User 
}
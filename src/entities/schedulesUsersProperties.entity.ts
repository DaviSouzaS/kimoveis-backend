import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { Users } from "./users.entity"
import { RealEstate } from "./realEstate.entity"

@Entity("schedules_users_properties")
export class schedulesUsersProperties {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column() 
    date: Date

    @Column() 
    hour: Date

    @ManyToOne(() => RealEstate, { nullable: false }) 
    realEstate: RealEstate

    @ManyToOne(() => Users, { nullable: false }) 
    users: Users
}
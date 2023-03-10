import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories") 
export class Categories {

    @PrimaryGeneratedColumn("increment") 
    id: number

    @Column({ length: 45, unique: true })
    name: string
    
}
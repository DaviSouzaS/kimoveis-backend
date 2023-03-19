import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeUpdate, BeforeInsert } from "typeorm"
import { getRounds, hashSync } from "bcryptjs"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 45, unique: true })
    email: string

    @Column({ length: 45}) 
    name: string

    @Column({ default: false })
    admin: boolean

    @Column({ length: 120 })
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted: number = getRounds(this.password);

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10)  
        } 
    }

    @CreateDateColumn({ type: "date" })  
    createdAt: string

    @UpdateDateColumn({ type: "date" }) 
    updatedAt: string

    @DeleteDateColumn({ nullable: true, type: "date" }) 
    deletedAt?: string | null | undefined
}
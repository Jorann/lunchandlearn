import { AddressEntity } from 'src/AddressModule/address.entity'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({ unique: true })
    public name: string

    @Column()
    public password: string

    @CreateDateColumn()
    public createdAt: Date

    @UpdateDateColumn()
    public updatedAt: Date

    @OneToMany(() => AddressEntity, address => address.user)
    public addresses: AddressEntity[]
}

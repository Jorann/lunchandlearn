import { UserEntity } from 'src/UserModule/ueer.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'address' })
export class AddressEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public street: string

    @Column()
    public houseNumber: number

    @ManyToOne(() => UserEntity, user => user.addresses)
    public user: UserEntity
}

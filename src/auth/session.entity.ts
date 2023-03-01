import { UserEntity } from 'src/UserModule/ueer.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('session')
export class SessionEntity {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public token: string

    @Column()
    public expiresAt: Date

    @ManyToOne(() => UserEntity, user => user.sessions)
    public user: UserEntity
}

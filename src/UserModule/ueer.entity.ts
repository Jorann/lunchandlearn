import { SessionEntity } from 'src/auth/session.entity'
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

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

    @OneToMany(() => SessionEntity, session => session.user)
    public sessions: SessionEntity[]
}

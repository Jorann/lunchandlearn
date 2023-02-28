import { Module } from '@nestjs/common'
import { UserEntity } from './ueer.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [UserEntity, UserResolver, UserService],
})
export class UserModule {
    constructor() {}
}

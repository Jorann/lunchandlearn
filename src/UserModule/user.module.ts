import { Module } from '@nestjs/common'
import { UserEntity } from './ueer.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressModule } from 'src/AddressModule/address.module'
import { AddressEntity } from 'src/AddressModule/address.entity'

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, AddressEntity])],
    providers: [UserEntity, UserResolver, UserService],
})
export class UserModule {
    constructor() {}
}

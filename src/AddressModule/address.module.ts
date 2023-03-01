import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/UserModule/ueer.entity'
import { AddressEntity } from './address.entity'
import { AddressResolver } from './address.resolver'

@Module({
    providers: [AddressResolver],
    imports: [TypeOrmModule.forFeature([AddressEntity, UserEntity])],
    exports: [TypeOrmModule],
})
export class AddressModule {}

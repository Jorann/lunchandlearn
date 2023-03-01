import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from 'src/UserModule/ueer.entity'
import { UserType } from 'src/UserModule/user.type'
import { Repository } from 'typeorm'
import { AddressType } from './address.type'

@Resolver(AddressType)
export class AddressResolver {
    public constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    @ResolveField(() => UserType)
    public user(@Parent() address: AddressType): Promise<UserEntity> {
        return this.userRepository.findOne({ where: { id: address.user.id } })
    }
}

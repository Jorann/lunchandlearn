import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressEntity } from 'src/AddressModule/address.entity'
import { AddressType } from 'src/AddressModule/address.type'
import { Repository } from 'typeorm'
import { UserService } from './user.service'
import { CreateUserInputType, UserType } from './user.type'

@Resolver(UserType)
export class UserResolver {
    public constructor(
        private userService: UserService,
        @InjectRepository(AddressEntity) private addressRepo: Repository<AddressEntity>
    ) {}
    @Mutation(() => Boolean)
    public createUser(@Args('input') input: CreateUserInputType) {
        return this.userService.createUser(input)
    }

    @Query(() => [UserType])
    public getUsers() {
        return this.userService.getUsers()
    }

    @Query(() => UserType)
    public getUser(@Args('id') id: number) {
        return this.userService.getUser(id)
    }

    @ResolveField(() => [AddressType])
    public addresses(@Parent() user: UserType) {
        return this.addressRepo.find({ where: { user: { id: user.id } } })
    }
}

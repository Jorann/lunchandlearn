import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInputType, UserType } from './user.type'

@Resolver(UserType)
export class UserResolver {
    public constructor(private userService: UserService) {}
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
}

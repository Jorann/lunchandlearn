import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInputType, UserType } from './user.type'

@Resolver(UserType)
export class UserResolver {
    public constructor(private userService: UserService) {}
    @Mutation(() => Boolean)
    public createUser(@Args('input') input: CreateUserInputType) {
        return this.userService.createUser(input)
    }
}

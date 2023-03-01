import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthResponseType } from './auth.type'

@Resolver()
export class AuthResolver {
    public constructor() {}

    @Mutation(() => AuthResponseType)
    public login(@Args() user: string, password: string) {
        return
    }
}

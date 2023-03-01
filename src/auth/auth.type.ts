import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthResponseType {
    @Field(() => String)
    public token: string

    @Field(() => Date)
    public expiresAt: Date
}

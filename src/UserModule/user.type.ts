import { Field, InputType, ObjectType } from '@nestjs/graphql'

@InputType()
export class CreateUserInputType {
    @Field(() => String)
    public user: string

    @Field(() => String)
    public password: string
}

@ObjectType()
export class UserType {
    @Field(() => String)
    public user: string

    @Field(() => Date)
    public createdAt: Date
}

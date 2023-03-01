import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { AddressType } from 'src/AddressModule/address.type'

@InputType()
export class CreateUserInputType {
    @Field(() => String)
    public name: string

    @Field(() => String)
    public password: string
}

@ObjectType()
export class UserType {
    @Field(() => Int)
    public id: number

    @Field(() => String)
    public name: string

    @Field(() => String)
    public password: string

    @Field(() => Date)
    public createdAt: Date

    @Field(() => Date)
    public updatedAt: Date

    @Field(() => [AddressType])
    public addresses: AddressType[]
}

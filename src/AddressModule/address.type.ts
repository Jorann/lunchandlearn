import { Field, Int, ObjectType } from '@nestjs/graphql'
import { UserType } from 'src/UserModule/user.type'

@ObjectType()
export class AddressType {
    @Field(() => Int)
    public id: number

    @Field(() => String)
    public street: string

    @Field(() => Int)
    public houseNumber: number

    @Field(() => UserType)
    public user: UserType
}

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PingType {
  @Field(() => String)
  public ping: string;

  @Field(() => String)
  public pong: string;
}

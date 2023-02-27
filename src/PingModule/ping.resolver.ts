import { Query, Resolver } from '@nestjs/graphql';
import { PingType } from './ping.type';

@Resolver(PingType)
export class PingResolver {
  @Query(() => PingType)
  public getPingAndPong() {
    return {
      ping: 'ping',
      pong: 'pong',
    };
  }
}

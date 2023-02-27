import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from './database/database.module';
import { PingModule } from './PingModule/ping.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      debug: true,
      playground: true,
    }),
    PingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}

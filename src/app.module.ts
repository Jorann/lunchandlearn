import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PingModule } from './PingModule/ping.module'
import { UserEntity } from './UserModule/ueer.entity'
import { UserModule } from './UserModule/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'secret',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            debug: true,
            playground: true,
        }),
        PingModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor() {}
}

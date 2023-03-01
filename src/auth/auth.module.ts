import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from 'src/UserModule/ueer.entity'
import { UserModule } from 'src/UserModule/user.module'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
    imports: [UserModule],
    providers: [AuthResolver, AuthService],
})
export class AuthModule {}

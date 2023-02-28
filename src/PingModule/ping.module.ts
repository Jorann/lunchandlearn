import { Module } from '@nestjs/common'
import { PingResolver } from './ping.resolver'

@Module({
    exports: [PingResolver],
    providers: [PingResolver],
})
export class PingModule {}

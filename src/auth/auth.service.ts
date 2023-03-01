import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from 'src/UserModule/ueer.entity'
import { Repository } from 'typeorm'

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    public async login(name: string, password: string) {
        const user = await this.userRepository.findOne({ where: { name, password } })

        return user || null
    }
}

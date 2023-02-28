import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from './ueer.entity'
import { CreateUserInputType } from './user.type'

@Injectable()
export class UserService {
    public constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {}

    public async createUser(input: CreateUserInputType) {
        const newUser = new UserEntity()
        newUser.name = input.user
        newUser.password = input.password

        return !!(await this.userRepository.save(newUser))
    }
}

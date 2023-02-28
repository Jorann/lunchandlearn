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
        newUser.name = input.name
        newUser.password = input.password

        return !!(await this.userRepository.save(newUser))
    }

    public async getUsers() {
        return await this.userRepository.find()
    }

    public async getUser(id: number) {
        return await this.userRepository.findOne({ where: { id } })
    }
}

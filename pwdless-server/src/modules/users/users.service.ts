import { Injectable } from '@nestjs/common';
import { FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDTO) {
    const user = this.userRepository.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
    });

    return this.userRepository.save(user);
  }

  async findOne(where: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    return this.userRepository.findOne({ where, relations: [] });
  }

  async findAll(
    where: FindOptionsWhere<User> | FindOptionsWhere<User>[],
    rest: FindManyOptions<User>,
  ) {
    return this.userRepository.findAndCount({ where, ...rest });
  }

  async update(userId: string, data: UpdateUserDTO) {
    return this.userRepository.update({ id: userId }, data);
  }

  async remove(userId: string) {
    return this.userRepository.softDelete({ id: userId });
  }
}

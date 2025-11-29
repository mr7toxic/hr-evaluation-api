import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    async create(email: string, password: string, role: Role = Role.USER) {
        const user = this.repo.create({ email, password, role });
        return this.repo.save(user);
    }

    findByEmail(email: string) {
        return this.repo.findOne({ where: { email } });
    }

    findById(id: number) {
        return this.repo.findOne({ where: { id } });
    }
}

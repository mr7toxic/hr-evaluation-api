import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Role } from '../users/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwt: JwtService,
    ) { }

    async register(dto: RegisterDto) {
        try {
            const existUser = await this.usersService.findByEmail(dto.email);
            if (existUser)
                throw new UnauthorizedException('⚠️ Email already in use ❌');
            const hashed = await bcrypt.hash(dto.password, 10);
            const role = dto.role ?? Role.USER;
            const user = await this.usersService.create(dto.email, hashed, role);
            return { id: user.id, email: user.email, role: user.role };
        } catch (error) {
            throw error;
        }
    }

    async login(dto: LoginDto) {
        try {
            const user = await this.usersService.findByEmail(dto.email);
            if (!user) throw new UnauthorizedException('User not found ❌');

            const valid = await bcrypt.compare(dto.password, user.password);
            if (!valid) throw new UnauthorizedException('⚠️ Invalid credentials ❌');

            const payload = { sub: user.id, email: user.email, role: user.role };
            const accessToken = this.jwt.sign(payload);

            return { accessToken };
        } catch (error) {
            throw error;
        }
    }
}

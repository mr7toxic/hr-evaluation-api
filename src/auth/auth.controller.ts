import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) { }

    @Post('register')
    @ApiBody({ type: RegisterDto })
    async register(@Body() dto: RegisterDto, @Res() res: Response) {
        try {
            const result = await this.auth.register(dto);
            return res.status(HttpStatus.CREATED).json(result);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({ message: error.message });
        }
    }

    @Post('login')
    @ApiBody({ type: LoginDto })
    async login(@Body() dto: LoginDto, @Res() res: Response) {
        try {
            const result = await this.auth.login(dto);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
        }
    }
}

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) { }

    @Post('register')
    @ApiBody({ type: RegisterDto })
    register(@Body() dto: RegisterDto) {
        return this.auth.register(dto);
    }

    @Post('login')
    @ApiBody({ type: LoginDto })
    login(@Body() dto: LoginDto) {
        return this.auth.login(dto);
    }
}

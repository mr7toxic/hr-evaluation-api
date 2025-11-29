import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { Role } from '../../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;
    @ApiProperty()
    @IsOptional()
    @IsEnum(Role)
    role?: Role;
}

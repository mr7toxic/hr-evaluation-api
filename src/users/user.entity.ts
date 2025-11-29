import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum Role {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity()
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ApiProperty({ enum: Role, default: Role.USER })
    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;
}
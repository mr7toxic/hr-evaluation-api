import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow<string>("DB_HOST"),
        port: configService.getOrThrow<number>("DB_PORT") || 5432,
        username: configService.getOrThrow<string>("DB_USER"),
        password: configService.getOrThrow<string>("DB_PASS"),
        database: configService.getOrThrow<string>("DB_NAME"),
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule { }

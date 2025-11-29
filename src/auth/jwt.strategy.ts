import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            secretOrKey: process.env.JWT_SECRET || 'dev_jwt_secret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: any) {
        // چیزی که اینجا return می‌کنیم میره تو request.user
        return { userId: payload.sub, email: payload.email, role: payload.role };
    }
}

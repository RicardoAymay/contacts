import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
  UsersModule,
  PassportModule,
  JwtModule.register({
    secret: process.env.SECRET_KEY,
    signOptions: {expiresIn: '1h'}
  }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
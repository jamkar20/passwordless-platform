import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Session } from './entities/session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSessionDTO } from './dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepo: Repository<Session>,
  ) {}

  private hashToken(token: string) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  generateRefreshToken(): string {
    return crypto.randomBytes(64).toString('hex');
  }

  async create(data: CreateSessionDTO) {
    const refreshToken = this.generateRefreshToken();
    const refreshTokenHash = this.hashToken(refreshToken);


    // const session = this.sessionRepo.create({
    //   user: data.user,
    //   device:
    // });
  }

  async refreshSession() {}

  async revokeSession() {}

  async revokeUserAllSessions() {}

  async validateSession() {}

  async getUserSessions() {}
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { WebauthnModule } from './modules/webauthn/webauthn.module';
import { TotpModule } from './modules/totp/totp.module';
import { SessionModule } from './modules/session/session.module';
import { DeviceModule } from './modules/device/device.module';
import { PolicyModule } from './modules/policy/policy.module';
import { AuditModule } from './modules/audit/audit.module';

@Module({
  imports: [UsersModule, WebauthnModule, TotpModule, SessionModule, DeviceModule, PolicyModule, AuditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

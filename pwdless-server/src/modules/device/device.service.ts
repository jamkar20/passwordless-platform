import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepo: Repository<Device>,
  ) {}

  async findByFingerprint(userId: string, fingerprint: string) {
    return this.deviceRepo.findOne({
      where: {
        user: { id: userId },
        fingerprint,
      },
      relations: ['user'],
    });
  }

  async registerDevice(
    userId: string,
    ip: string,
    fingerprint: string,
    userAgent: string,
  ): Promise<Device> {
    let device = await this.findByFingerprint(userId, fingerprint);

    if (device) {
      device.lastSeen = new Date();
      return this.deviceRepo.save(device);
    }

    device = this.deviceRepo.create({
      user: { id: userId },
      fingerprint,
      userAgent,
      trusted: false,
    });

    return this.deviceRepo.save(device);
  }

  async trustDevice(deviceId: string): Promise<void> {
    await this.deviceRepo.update({ id: deviceId }, { trusted: true });
  }

  async untrustDevice(deviceId: string): Promise<void> {
    await this.deviceRepo.update({ id: deviceId }, { trusted: false });
  }

  async updateLastSeen(deviceId: string): Promise<void> {
    await this.deviceRepo.update({ id: deviceId }, { lastSeen: new Date() });
  }

  async getUserDevices(userId: string): Promise<Device[]> {
    return this.deviceRepo.find({
      where: {
        user: { id: userId },
      },
      order: { lastSeen: 'DESC' },
    });
  }

  async disableDevice(deviceId: string): Promise<void> {
    await this.deviceRepo.update(
      { id: deviceId },
      {
        deletedAt: new Date(),
        trusted: false,
      },
    );
  }
}

import { Device } from 'src/modules/device/entities/device.entity';
import { User } from '../../users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  user: User;

  @OneToOne(() => Session)
  @JoinColumn()
  device: Device;

  @Column()
  refreshTokenHash: string;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}

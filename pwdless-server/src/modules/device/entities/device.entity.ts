import { User } from '../../users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('devices')
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (s) => s.devices, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  userAgent: string;

  @Column({ nullable: true })
  fingerprint?: string;

  @Column()
  ip: string;

  @Column({ default: false })
  trusted: boolean;

  @UpdateDateColumn()
  lastSeen: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

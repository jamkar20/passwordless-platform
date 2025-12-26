import {User} from "../../users/entities/users.entity";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('devices')
export class Device {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (s) => s.devices, {onDelete: "CASCADE"})
    user: User;

    @Column()
    userAgent: string;

    @Column()
    ip: string;

    @Column({default: false})
    trusted: boolean;

    @UpdateDateColumn()
    lastSeen: Date;

    @CreateDateColumn()
    createdAt: Date;
}
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {WebAuthnCredential} from "../../webauthn/entities/credential.entity";
import {Session} from "../../session/entities/session.entity";
import {Device} from "../../device/entities/device.entity";

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
}

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    email: string;

    @Column({nullable: true, select: false})
    password: string;

    @Column({default: false})
    mfaEnabled: boolean;

    @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
    role: UserRole;

    @Column({length: 64, nullable: true})
    firstName: string;

    @Column({length: 128, nullable: true})
    lastName: string;

    @OneToMany(() => WebAuthnCredential, (c) => c.user)
    credentials: WebAuthnCredential[];

    @OneToMany(() => Session, (s) => s.user)
    sessions: Session[];

    @OneToMany(() => Device, (d) => d.user)
    devices: Device[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
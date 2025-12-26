import {User} from "../../users/entities/users.entity";
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity('totp_secrets')
export class Totp {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User;

    @Column({type: 'bytea'})
    secretEncrypted: Buffer;

    @Column({default: false})
    enabled: boolean;

    @Column({type: 'text', array: true})
    recoveryCodes: string[];
}
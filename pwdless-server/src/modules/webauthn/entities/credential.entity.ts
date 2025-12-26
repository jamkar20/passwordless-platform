import {User} from "../../users/entities/users.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('webauthn_credentials')
export class WebAuthnCredential {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, u => u.credentials, {onDelete: "CASCADE"})
    user: User

    @Column()
    credentialId: string;

    @Column({type: 'bytea'})
    publicKey: Buffer;

    @Column({default: 0})
    counter: number;

    @Column({nullable: true})
    transports?: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
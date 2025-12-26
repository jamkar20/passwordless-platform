import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity("audit_logs")
export class AuditLog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    action: string;

    @Column()
    ip: string;

    @Column({type: 'jsonb', nullable: true})
    metadata;

    @CreateDateColumn()
    createdAt: Date;
}
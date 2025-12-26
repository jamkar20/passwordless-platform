import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('policies')
export class Policy {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'jsonb'})
    condition;

    @Column({type: 'jsonb'})
    action;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
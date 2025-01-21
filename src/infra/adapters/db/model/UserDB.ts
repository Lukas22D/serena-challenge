import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity("user")
export default class UserDB {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @PrimaryGeneratedColumn('uuid')
    id_publico: string;

    @Column()
     name: string;

    @Column({ unique: true })
     email: string;

    @Column()
     password: string;

}

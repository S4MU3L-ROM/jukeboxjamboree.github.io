import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id;

    @Column()
    name;

    @Column()
    email;

    @Column()
    password;
}

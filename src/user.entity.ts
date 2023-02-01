import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";

@Entity()
export default class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    profilePictureUrl: string;

    @Column()
    registrationDate: Date;
}
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import ToDoTopic from './ToDoTopic';

@Entity()
export class User{

	@PrimaryGeneratedColumn()
    id: number;


    @Column({length:100})
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => ToDoTopic, topic => topic.user)
    topics: ToDoTopic

} 
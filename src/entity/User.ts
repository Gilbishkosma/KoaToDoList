import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Topic } from './ToDoTopic';

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

    @OneToMany(type => Topic, topic => topic.user)
    topics: Topic[]

} 
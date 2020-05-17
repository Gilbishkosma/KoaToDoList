import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm";
import ToDoList from './ToDoList'
import User from './User'

@Entity()
export class Topic{

	@PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    name: string;

    @OneToMany(type => ToDoList, list => list.topic )
    lists: ToDoList[];

    @ManyToOne(type => User, user => user.topics)
    user: User;

} 
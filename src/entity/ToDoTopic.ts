import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, ManyToOne} from "typeorm";
import { List } from './ToDoList'
import { User } from './User'

@Entity()
export class Topic{

	@PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    title: string;

    @OneToMany(type => List, list => list.topic )
    lists: List[];

    @ManyToOne(type => User, user => user.topics)
    user: User;

    @CreateDateColumn({type: 'datetime'})
    date: Date;

} 
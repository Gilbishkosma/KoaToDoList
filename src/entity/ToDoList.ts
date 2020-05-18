import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Topic } from './ToDoTopic'



@Entity()
export class List{

	@PrimaryGeneratedColumn()
    id: number;


    @Column({length:100})
    name: string;

    @ManyToOne(type => Topic, topic => topic.lists)
    topic: Topic;

} 
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import ToDoTopic from './ToDoTopic'

@Entity()
export class List{

	@PrimaryGeneratedColumn()
    id: number;


    @Column({length:100})
    name: string;

    @ManyToOne(type => ToDoTopic, todotopic => todotopic.lists)
    topic: ToDoTopic;

} 
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Locations {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    continent: string;

    @Column()
    country: string;

    @Column()
    division: string;

    @Column()
    city: string;

}

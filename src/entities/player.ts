import {Entity, ManyToOne, PrimaryKey, Property} from "@mikro-orm/postgresql";
import {Team} from "./team";

@Entity()
export class Player {

    @PrimaryKey()
    id!: bigint;

    @Property()
    name: string;

    @ManyToOne(() => Team)
    team?: Team;

    constructor(name: string, team?: Team) {
        this.name = name;
        this.team = team;
    }

}
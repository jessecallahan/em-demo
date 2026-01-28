import {Collection, Entity, OneToMany, PrimaryKey, Property} from '@mikro-orm/postgresql';
import {Player} from "./player";

@Entity()
export class Team {

    @PrimaryKey()
    id!: bigint;

    @Property()
    name: string;

    @OneToMany(
        () => Player,
        player => player.team
    )
    players = new Collection<Player>(this);

    constructor(name: string) {
        this.name = name;
    }

}

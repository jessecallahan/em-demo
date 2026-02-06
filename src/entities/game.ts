import {Collection, Entity, ManyToMany, ManyToOne, PrimaryKey} from '@mikro-orm/postgresql';
import {Team} from './team';
import {Pitch} from "./pitch";

@Entity()
export class Game {

    @PrimaryKey()
    id!: bigint;

    @ManyToOne(() => Team)
    home: Team;

    @ManyToOne(() => Team)
    away: Team;

    @ManyToMany(() => Pitch)
    pitches = new Collection<Pitch>(this);

    constructor(home: Team, away: Team) {
        this.home = home;
        this.away = away;
    }
}

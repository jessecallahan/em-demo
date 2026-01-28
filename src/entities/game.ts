import {Collection, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryKey, Property} from '@mikro-orm/postgresql';
import {Player} from "./player";
import {Team} from './team';

@Entity()
export class Game {

    @PrimaryKey()
    id!: bigint;

    @ManyToOne(() => Team)
    home: Team;

    @ManyToOne(() => Team)
    away: Team;

    constructor(home: Team, away: Team) {
        this.home = home;
        this.away = away;
    }
}

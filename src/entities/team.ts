import {Collection, Entity, ManyToMany, OneToMany, PrimaryKey, Property} from '@mikro-orm/postgresql';
import {Player} from "./player";
import {Game} from './game';
import {HomeGames} from './home-games';

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

    @ManyToMany({
        entity: () => Game,
        pivotEntity: () => HomeGames,
        owner: true,
    })
    home_games = new Collection<Game>(this);

    @ManyToMany(
        () => Game,
        (game) => game.away
    )
    away_games = new Collection<Game>(this);

    constructor(name: string) {
        this.name = name;
    }

}

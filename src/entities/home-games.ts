import {Collection, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryKey, Property} from '@mikro-orm/postgresql';
import {Player} from "./player";
import {Team} from './team';
import {Game} from './game';

@Entity()
export class HomeGames {

    @PrimaryKey()
    id!: bigint;

    @ManyToOne(() => Team)
    home_team: Team;

    @ManyToOne(() => Game)
    game: Game;

    constructor(home_team: Team, game: Game) {
        this.home_team = home_team;
        this.game = game;
    }
}

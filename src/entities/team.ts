import {Collection, Entity, OneToMany, PrimaryKey, Property} from '@mikro-orm/postgresql';
import {Player} from "./player";
import {Game} from './game';

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

    // Collection of games played at home
    @OneToMany(() => Game, game => game.home)
    homeGames = new Collection<Game>(this);

    // Collection of games played away
    // @OneToMany(() => Game, game => game.away)
    // awayGames = new Collection<Game>(this);
    //
    // @Property({ persist: false })
    // get allGames(): Game[] {
    //     return [...this.homeGames.getItems(), ...this.awayGames.getItems()];
    // }

    constructor(name: string) {
        this.name = name;
    }

}

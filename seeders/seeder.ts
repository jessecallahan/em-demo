import {Seeder} from '@mikro-orm/seeder';
import {EntityManager} from '@mikro-orm/postgresql';
import {Game, Player, Team} from "../src/entities";

export class MySeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        // Running a seeder from the command line or programmatically will automatically
        // call flush and clear after the run method has completed.

        // Test 1 - Entity Constructor
        // * What is the difference between instantiation and create()?
        // * What is the difference between instantiation and create()?
        //
        // const test = new Test('test');
        // em.create(Test, test);
        // em.create(Test, {test: 'test');
        //
        // test.name = 'test two';
        // em.persist(test);
        // test.name = 'test three';
        //
        // const test = {
        //     name: 'test 2'
        // }

        // Test 2 - Relationships
        // * How to add data to relational tables (both one-to-many and many-to-many)?
        // * What is a reference?
        // * What is initialization?
        // * How to use find correctly when adding to relational table?
        //
        const mariners = new Team('Seattle Mariners');
        const rainiers = new Team('Tacoma Rainiers');

        // const jesse = new Player('Jesse');
        // jesse.team = mariners;
        //
        // mariners.players.add(new Player('Ichiro'));


        const game = new Game(mariners, rainiers);
        em.persist([mariners, rainiers, game]);

        const teams = await em.find(Team, {});
        const teamsWithGames = teams
            .map(team =>
                ({...team,
                    allGames: team.allGames.map(g => ({home: g.home.name, away: g.away.name}))
                })
            );
        console.log(teamsWithGames.map(t => ({team: t.name, games: t.allGames})));
        // const game = {home: mariners, away: rainiers} as Game;
        // mariners.games.add(game);
        // * How to use find correctly when adding to relational table?
        // const griffey = new Player('Ken Griffey Jr');
        // //griffey.team = mariners;
        // const foundTeam = await em.findOneOrFail(Team, {name: mariners.name});
        // if (foundTeam) {
        //     griffey.team = foundTeam;
        //     //foundTeam.players.add(griffey);
        // }




















        await em.flush();
        em.clear();
    }
}

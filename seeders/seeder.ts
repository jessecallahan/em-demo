import {Seeder} from '@mikro-orm/seeder';
import {EntityManager, wrap} from '@mikro-orm/postgresql';
import {Game, Player, Team} from "../src/entities";
import {Pitch} from "../src/entities/pitch";

export class MySeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        // Running a seeder from the command line or programmatically will automatically
        // call flush and clear after the run method has completed.

        // Test 1 - Entity Constructor
        // * What is the difference between instantiation and create()?
        // * What is the difference between instantiation and create()?
        const mariners1 = new Team('Seattle Mariners');
        const rainiers1 = {
            name: 'Tacoma Rainiers'
        } as Team;
        em.create(Team, rainiers1);
        // em.create(Team, mariners1);
        em.persist([mariners1]);

        // Test 2 - Relationships
        // * How to add data to relational tables (both one-to-many and many-to-many)?
        // * What is a reference?
        // * What is initialization?
        // * How to use find correctly when adding to relational table?

        // * How to add data to relational tables (both one-to-many and many-to-many)?
        const mariners2 = new Team('Seattle Mariners second test');
        const rainiers2 = new Team('Tacoma Rainiers second test');

        const jesse = new Player('Jesse');
        mariners2.players.add(jesse)
        // jesse.team = mariners2;
        const hannah = new Player('Hannah', rainiers2);

        const marinersHomeGame = new Game(mariners2, rainiers2);
        mariners2.homeGames.add(marinersHomeGame);
        const game2 = new Game(mariners2, rainiers2);
        em.create(Team, {name: 'Third Team', players: [], homeGames: [], awayGames: []} as never);

        em.persist([
            mariners2,
            rainiers2,
            hannah,
            game2
        ]);

        // * What is a reference?
        const thirdTeam = em.getReference(Team, 2);
        // em.remove(thirdTeam);

        // * What is initialization?
        console.log(wrap(thirdTeam).isInitialized());
        const thirdTeam2= await wrap(thirdTeam).init();
        if (thirdTeam2) {
            console.log(wrap(thirdTeam2).isInitialized());
        }

        // How to use find correctly when adding to relational table?

        const foundTeam = await em.findOneOrFail(Team, {name: 'Seattle Mariners second test'});
        if (foundTeam) {
            const newTeam = new Team('Forth Team');
            foundTeam.homeGames.add(new Game(foundTeam, newTeam))
            const griffey = new Player('Griffey', foundTeam);
        }

        // Test 3 - Collections
        // * How to use add() correctly?
        // * What is the best way to add a collection?
        const pitch = new Pitch('strike');
        em.persist(pitch);
        const marlins = new Team('Marlins');
        const teamFellow = new Team('Team Fellow');
        const game3 = new Game(marlins, teamFellow);
        marlins.homeGames.add(game3);
        const foundPitch = await em.findOneOrFail(Pitch, 1);
        if (foundPitch) {
            game3.pitches.add([
                new Pitch('strike'),
                new Pitch('ball'),
                new Pitch('strike', 'fastball'),
                foundPitch
            ]);
        }

        em.create(Team, marlins);
        em.create(Team, teamFellow);





















        await em.flush();
        em.clear();
    }
}

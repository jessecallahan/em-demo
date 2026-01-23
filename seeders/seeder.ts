import {Seeder} from '@mikro-orm/seeder';
import {EntityManager} from '@mikro-orm/postgresql';
import {Test} from '../src/entities';

export class MySeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
            em.create(Test, {title: 'thingy'})
            await em.flush();

    }
}

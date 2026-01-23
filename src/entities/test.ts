import {Entity, PrimaryKey, Property} from '@mikro-orm/postgresql';

@Entity()
export class Test {

    @PrimaryKey()
    id!: bigint;

    @Property()
    title: string;

    constructor(title: string) {
        this.title = title;
    }

}

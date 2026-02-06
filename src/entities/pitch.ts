import {Entity, PrimaryKey, Property} from "@mikro-orm/postgresql";

@Entity()
export class Pitch {

    @PrimaryKey()
    id!: bigint;

    @Property()
    type: 'strike' | 'ball';

    @Property({nullable: true})
    description?: string;

    constructor(type: 'strike' | 'ball', description?: string) {
        this.type = type;
        this.description = description;
    }
}
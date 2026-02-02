import {defineConfig} from "@mikro-orm/core";
import {SeedManager} from '@mikro-orm/seeder';
import {Options, PostgreSqlDriver} from '@mikro-orm/postgresql';
import {Player, Team} from "./src/entities";

const options = {
} satisfies Options;

export default defineConfig({
    entities: [
        Team,
        Player,
    ],
    driver: PostgreSqlDriver,
    dbName: 'postgres',
    user: 'postgres',
    password: 'password',
    host: 'localhost', // or your postgres host
    port: 5432, // 5433 for office cpu
    extensions: [SeedManager],
    ...options,
});

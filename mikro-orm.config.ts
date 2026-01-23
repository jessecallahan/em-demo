import {defineConfig} from "@mikro-orm/core";
import { Test } from "./src/entities";
import {SeedManager} from '@mikro-orm/seeder';
import {Options, PostgreSqlDriver} from '@mikro-orm/postgresql';

const options = {
} satisfies Options;

export default defineConfig({
    entities: [
        Test
    ],
    driver: PostgreSqlDriver,
    dbName: 'postgres',
    user: 'postgres',
    password: 'password',
    host: 'localhost', // or your postgres host
    port: 5433,
    extensions: [SeedManager],
    ...options,
});

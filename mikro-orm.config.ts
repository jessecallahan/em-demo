import {defineConfig} from "@mikro-orm/core";

export default defineConfig({
    entities: ['dist/entities/**/*.js'], // path to your JS entities (compiled)
    entitiesTs: ['src/entities/**/*.ts'], // path to your TS entities (source)
    dbName: 'your_database_name',
    user: 'your_user',
    password: 'your_password',
    host: 'localhost', // or your postgres host
    port: 5432,
    type: 'postgresql',
});
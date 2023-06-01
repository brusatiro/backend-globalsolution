import "reflect-metadata"
import { DataSource } from "typeorm"
import { Locations } from "./entity/Locations"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "suleiman.db.elephantsql.com",
    port: 5432,
    username: "lwtmwzgd",
    password: "UaC2J_XpAwo3spzA5jUnMX0QO0MVYT4d",
    database: "lwtmwzgd",
    synchronize: true,
    logging: false,
    entities: [
        "./src/entity/*"
    ],
    migrations: [],
    subscribers: [],
})


import express from "express"
//import “reflect-metadata”
import bodyParser from "body-parser"
import cors from "cors";
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"

// create express app
const app = express()
AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization", err);
});

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

// start express server
app.listen(process.env.PORT || 3333, () => {
    console.log("Servidor em Execução");
});

// const port = process.env.PORT || 3333

console.log("Express server has started on port 3333. Open http://localhost:3333/home to see results")






// import * as express from "express"
// import * as bodyParser from "body-parser"
// import { Request, Response } from "express"
// import { AppDataSource } from "./data-source"
// import { Routes } from "./routes"
// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     // create express app
//     const app = express()
//     app.use(bodyParser.json())

//     // register express routes from defined application routes
//     Routes.forEach(route => {
//         (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
//             const result = (new (route.controller as any))[route.action](req, res, next)
//             if (result instanceof Promise) {
//                 result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

//             } else if (result !== null && result !== undefined) {
//                 res.json(result)
//             }
//         })
//     })

//     // setup express app here
//     // ...

//     // start express server
//     app.listen(3000)

//     // insert new users for test
//     await AppDataSource.manager.save(
//         AppDataSource.manager.create(User, {
//             firstName: "Timber",
//             lastName: "Saw",
//             age: 27
//         })
//     )

//     await AppDataSource.manager.save(
//         AppDataSource.manager.create(User, {
//             firstName: "Phantom",
//             lastName: "Assassin",
//             age: 24
//         })
//     )

//     console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

// }).catch(error => console.log(error))

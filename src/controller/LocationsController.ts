import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import { Locations } from "../entity/Locations"
import { request } from 'http'
// import { getRepository } from 'typeorm'

export const getLocations = async(request: Request, response: Response) => {
    const locations = await AppDataSource.getRepository(Locations).find()
    return response.json(locations);
}

export const saveLocations = async(request: Request, response: Response) => {
    const local = await AppDataSource.getRepository(Locations).save(request.body)
    return response.json(local)
}

// export class UserController {

//     private userRepository = AppDataSource.getRepository(User)

//     async all(request: Request, response: Response, next: NextFunction) {
//         return this.userRepository.find()
//     }

//     async one(request: Request, response: Response, next: NextFunction) {
//         const id = parseInt(request.params.id)


//         const user = await this.userRepository.findOne({
//             where: { id }
//         })

//         if (!user) {
//             return "unregistered user"
//         }
//         return user
//     }

//     async save(request: Request, response: Response, next: NextFunction) {
//         const { firstName, lastName, age } = request.body;

//         const user = Object.assign(new User(), {
//             firstName,
//             lastName,
//             age
//         })

//         return this.userRepository.save(user)
//     }

//     async remove(request: Request, response: Response, next: NextFunction) {
//         const id = parseInt(request.params.id)

//         let userToRemove = await this.userRepository.findOneBy({ id })

//         if (!userToRemove) {
//             return "this user not exist"
//         }

//         await this.userRepository.remove(userToRemove)

//         return "user has been removed"
//     }

// }
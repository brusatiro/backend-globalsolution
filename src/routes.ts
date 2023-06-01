import { Router, request, response, Request, Response} from 'express'
import { getLocations, saveLocations } from './controller/LocationsController'
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
     return response.json({ message: 'Hello Turma 007!' })
})
routes.get('/locations', getLocations)
routes.post('/locations', saveLocations)
 
 export default routes
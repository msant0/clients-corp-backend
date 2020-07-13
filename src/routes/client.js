import 'dotenv/config'
import { Router } from 'express'
import ClientController from '../controllers/client-controller'
import ClientModel from '../models/client'

const clientController = new ClientController(ClientModel)

const routes = Router()

routes.get('/clients', clientController.selectAllClients)
routes.get('/client/:_id', clientController.selectClientByID)
routes.post('/createClient', clientController.createClient)
routes.put('/updateClient/:id', clientController.updateClient)
routes.delete('/deleteClient/:_id', clientController.deleteClient)

export default routes
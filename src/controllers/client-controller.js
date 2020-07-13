import 'dotenv/config'
import ClientRepository from '../repository/Client'
import constants from '../helpers/constants'

const clientRepository = new ClientRepository()

export default class ClientController {
    async selectAllClients(req, res) {
        const clients = await clientRepository.getAllClients()
        return res.json(clients)
    }

    async selectClientByID(req, res) {
        const { _id } = req.params
        const client = await clientRepository.getClient(_id)
        return res.json(client)
    }

    async createClient(req, res) {
        req
            .assert('CPF', constants.CPF_NOT_INFORMED)
            .notEmpty()

        req
            .assert('name', constants.NAME_NOT_INFORMED)
            .notEmpty()

        req
            .assert('email', constants.EMAIL_NOT_INFORMED)
            .notEmpty()

        req
            .assert('telephone', constants.TELEPHONE_NOT_INFORMED)
            .notEmpty()

        const errors = req.validationErrors()
        if (errors) return res.status(400).send(errors)

        const clientData = req.body
        const client = await clientRepository.setClient(clientData)

        return res.status(201).json(constants.SUCCESSFUL_CLIENT_CREATION)
    }

    async updateClient(req, res) {
        req
            .assert('CPF', constants.CPF_NOT_INFORMED)
            .notEmpty()

        const errors = req.validationErrors()
        if (errors) return res.status(400).send(errors)
        
        const clientData = req.body
        const client = await clientRepository.updateClient(clientData)

        return res.json(constants.SUCCESSFUL_CLIENT_MODIFIED)
    }

    async deleteClient(req, res) {
        const { _id } = req.params
        const client = await clientRepository.deleteClient(_id)

        return res.status(204).json(constants.SUCCESSFUL_CLIENT_DELETED)
    }
}
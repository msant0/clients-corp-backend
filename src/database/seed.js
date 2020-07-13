import faker from 'faker'
import connectToDb from './index'
import ClientModel from '../models/client'
import constants from '../helpers/constants'

connectToDb()
    .then(async function () {
        try {
            const clients = [
                {
                    CPF: '82014991073',
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    telephone: faker.phone.phoneNumber()
                },
                {
                    CPF: '80507836006',
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    telephone: faker.phone.phoneNumber()
                }
            ]
            console.log(constants.START_INSERT_CLIENTS_SEED)
            await ClientModel.insertMany(clients)
            const dbUsers = await ClientModel.find({}).lean()
            console.log(constants.FINISHED_INSERT_CLIENTS_SEED)

            return process.exit(0)
        } catch (err) {
            return err
        }
    })


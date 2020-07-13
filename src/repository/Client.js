import ClientModel from '../models/client'

export default class ClientRepository{
    async getAllClients(){
        return ClientModel.find().lean()
    }

    async getClient(_id){
        return ClientModel.find({CPF : _id}).lean()
    }

    async setClient(clientData){
        const { CPF, name, telephone, email } = clientData

        return ClientModel.create({CPF: CPF, name: name, telephone: telephone, email: email})
    }

    async updateClient(clientData){
        const { CPF, name, telephone, email} = clientData

        return ClientModel.updateOne({CPF: CPF}, {name: name, telephone: telephone, email: email})
    }

    async deleteClient(_id){
        return ClientModel.deleteOne({CPF: _id})
    }
}
import { Schema, model } from 'mongoose'

const clientSchema = new Schema({
    CPF: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    }
})

const Client = model('Client', clientSchema)

export default Client
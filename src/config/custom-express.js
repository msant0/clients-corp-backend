import 'dotenv/config'
import express from 'express'
import expressValidator from 'express-validator'
import cors from 'cors'
import connectToDb from '../database'
import { login, client } from '../routes'

const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(expressValidator())

app.use(client)

connectToDb()

export default app

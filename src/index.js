import 'dotenv/config'
import app from './config/custom-express'

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
import 'dotenv/config';
import { Router } from 'express';

const routes = Router();

routes.get('/', function(req, res) {
    res.send('retorno da req')
})

export default routes

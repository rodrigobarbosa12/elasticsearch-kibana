import { Router } from 'express';
import database from './database';
import kibana from './kibana';

const routes = Router();

routes.get('/db/buscar', database.create);
routes.post('/create', kibana.create);
routes.get('/findAll', kibana.findAll);
routes.get('/findById/:id', kibana.findById);
routes.get('/findByQuery/:email', kibana.findByQuery);

export default routes;

import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';
import validate from './app/middleWares/validate';

const routes = new Router();
routes.use(validate);
routes.get('/api/:page', CharacterController.index);
routes.get('/api/chars/:name', CharacterController.show);

export default routes;

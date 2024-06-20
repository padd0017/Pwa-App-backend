const {Router} = require('express');
const controller = require('../controller/movieController')
const {movieValidate} = require('../middleware/movieValidate');

const movieRouter = Router();

movieRouter.get('/', controller.getAll);
movieRouter.get('/favourites', controller.getFav);
movieRouter.get('/:id', controller.getOne);
movieRouter.post('/:id/favourite', movieValidate, controller.create);

module.exports = movieRouter;

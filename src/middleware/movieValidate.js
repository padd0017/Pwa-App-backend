const movieData = require('../models/movieData');
const {NotFoundError} = require("../utils/errors")

const movieValidate = (req, res, next) => {
    const {id}= req.params;

    const findId = movieData.some((movieId)=>{return movieId.id === Number(id)})
    if(!findId) throw new NotFoundError(`Movie with id ${id} not found`)
    next()
  };
  
  module.exports = {movieValidate};
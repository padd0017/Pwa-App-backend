const favouriteMovies = require('../models/favouriteMovies');
const services = require('../services/service')


const getAll =async (req, res, next)=>{
    try {
        let {keyword, sort}= req.query ;
        const limit = 10;
        const movieInfo = await  services.getAll(keyword, sort, limit)
        
            res.json({
                data: movieInfo
            }) 
        
    } 
    catch (err) {
        next(err);
    }
}

const getOne = async(req, res, next)=>{
    try {
        const {id} = req.params;
        const movieDetail = services.getOne(id)

        res.json({
            data: movieDetail
        })
    } catch(err) {
        next(err)
    }
}


//favourites

const create =async (req, res, next)=>{
    try {
        const{id} = req.params;
        let favMovie = services.create(id);

    console.log(favMovie)

        
        res.status(200).json({data:favMovie});
    } catch (err) {
        next(err)
    }
}

const getFav = async(req, res, next)=>{
    try{
        const infoMovie = services.getFav()
        res.json({data:infoMovie})
    } catch(err){
        next(err);
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    getFav
}

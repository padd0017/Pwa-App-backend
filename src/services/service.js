const movieData = require('../models/movieData');
const favouriteMovies = require('../models/favouriteMovies');
const imgUrl = require('../fetch');
const {  NotFoundError } = require('../utils/errors');


const getAll =  (keyword, sort, limit=10) => {
    keyword = keyword || '';
    sort = sort || '';
    console.log(keyword,sort);
    if(sort === 'popularity'){
         movieData.sort((a, b)=> b.popularity -a.popularity);
    } else if(sort === 'release-date'){
        movieData.sort((a, b)=> new Date(b.release_date) - new Date(a.release_date));
    } else if(sort === 'vote') {
        movieData.sort((a, b)=> b.vote_average -a.vote_average);
    }

    // if (!keyword) return movieData.slice(0, limit).map((movie)=> imgUrl.mappingData(movie));

    
      return movieData.filter((movie)=> movie.title.toLowerCase().includes(keyword.toLowerCase())).splice(0, limit).map((movie)=> imgUrl.mappingData(movie))
    } 


const getOne = (id)=>{
        const info = movieData.find((movie)=>movie.id === Number(id))
        if(info) {
            const newInfo = {
                ...info,
                imageUrl: imgUrl.generateImageUrl("w780", info.poster_path)
            }
            return newInfo
        } else {
            throw new NotFoundError(`Movie with id ${id} not found`)
        }
}

const create = (id)=>{
    id= Number(id)

    const favMovies = 
    movieData.find((movie)=>movie.id ===id)
    favMovies.imageUrl = imgUrl.generateImageUrl('w780',favMovies.poster_path)
    

    if(!favouriteMovies.some((movie) => movie.id === id)){
        favouriteMovies.push(favMovies)

        
        return favMovies
        
    } else {
        

        return favMovies
    }
}

const getFav = () => favouriteMovies;

module.exports = {
    getAll,
    getOne,
    create,
    getFav
} 
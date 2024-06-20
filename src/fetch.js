

const generateImageUrl = ( size, path) => {
    const Url = 'https://image.tmdb.org/t/p/';
    return Url + size + path
}

const mappingData = (data) => {
    const newData = {
        id: data.id,
        title: data.title,
        imageUrl: generateImageUrl("w92", data.poster_path)
        
    }

    return newData
}
module.exports = {generateImageUrl, mappingData}
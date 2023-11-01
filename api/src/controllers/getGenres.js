const axios = require('axios');
require('dotenv').config()
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/genres`

const getGenres = async () =>  {
    try {
        const { data } = await axios(`${URL}?key=${API_KEY}`);
        const genres = data.results.map((genre) => ({
            id: genre.id,
            name: genre.name,
            slug: genre.slug,
            games_count: genre.games_count,
            image_background: genre.image_background

        }))
        return genres;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getGenres
}
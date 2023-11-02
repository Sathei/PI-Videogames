const axios = require('axios');
const { Genres } = require('../db');
require('dotenv').config()
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/genres`

const getGenres = async () =>  {
    try {
        const { data } = await axios(`${URL}?key=${API_KEY}`);
        const genresData = data.results;

        const genresFound = genresData.map(async (genre) => {
            await Genres.findOrCreate({
                where: {
                    id: genre.id,
                    name: genre.name
                }
            });
        });

        await Promise.all(genresFound);

        const genresDb = await Genres.findAll({ order: [['name']]});

        return genresDb;
    } catch(error) {
        
        throw error;
    }
}
module.exports = {
    getGenres
}
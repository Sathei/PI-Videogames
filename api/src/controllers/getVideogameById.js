const axios = require('axios');
require('dotenv').config()
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`

const getVideogameById = async (id) => {
        const { data } = await axios(`${URL}/${id}?key=${API_KEY}`);
        const game = {
            name: data.name,
            description: data.description_raw,
            platforms: data.platforms.map((platformInfo) => ({
                id: platformInfo.platform.id,
                name: platformInfo.platform.name,
                image: platformInfo.platform.image,
                year_start: platformInfo.platform.year_start,
                year_end: platformInfo.platform.year_end,
                games_count: platformInfo.platform.games_count,
                released_at: platformInfo.released_at,
                requirements_en: platformInfo.requirements_en,
            })),
            image: data.image,
            dateReleased: data.released,
            rating: data.rating,
        };
        return game;
    
};

module.exports = {
    getVideogameById,
};
const axios = require('axios');
const { Videogame } = require('../db');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`

const getVideogameById = async (id) => {
    try {
        if(Sequelize.Validator.isUUID(id)){
        const dbGame = await Videogame.findOne({where: {id: id}})
        if(dbGame) return dbGame.toJSON();

        }

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

        }
     catch (error) {
        
        throw error;
    }
};

module.exports = {
    getVideogameById,
};
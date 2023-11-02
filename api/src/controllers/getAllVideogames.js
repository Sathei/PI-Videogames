const axios = require('axios');
const { Videogame } = require('../db');
const db = require('../db');
require('dotenv').config()
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/`

const getAllVideogamesApi = async () => {
    const { data } = await axios(`${URL}games?key=${API_KEY}`)
    const games = data.results.map((game) => ({
        name: game.name,
        description: game.description,
        platforms: game.platforms.map((platformInfo) => ({
            id: platformInfo.platform.id,
            name: platformInfo.platform.name,
            image: platformInfo.platform.image,
            year_start: platformInfo.platform.year_start,
            year_end: platformInfo.platform.year_end,
            games_count: platformInfo.platform.games_count,
            released_at: platformInfo.released_at,
            requirements_en: platformInfo.requirements_en,
        })),
        image: game.image,
        dateReleased: game.released,
        rating: game.rating
    }));
    return games;
};

const getAllVideogamesDb = async () => {
    const dbGames = await Videogame.findAll();
    return dbGames.map((game) => ({
        name: game.name,
        description: game.description,
        platforms: game.platforms.map((platformInfo) => ({
            id: platformInfo.platform.id,
            name: platformInfo.platform.name,
            image: platformInfo.platform.image,
            year_start: platformInfo.platform.year_start,
            year_end: platformInfo.platform.year_end,
            games_count: platformInfo.platform.games_count,
            released_at: platformInfo.released_at,
            requirements_en: platformInfo.requirements_en,
        })),
        image: game.image,
        dateReleased: game.released,
        rating: game.rating
    }))
}

const getAllVideogames = async () => {
    const apiGames = await getAllVideogamesApi();
    const dbGames = await getAllVideogamesDb();

    return [...dbGames, ...apiGames];
}

module.exports = {
    getAllVideogames,
};
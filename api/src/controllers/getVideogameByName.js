const axios = require('axios');
const { Videogame } = require('../db'); 
const { Op } = require('sequelize');
require('dotenv').config()
const { API_KEY } = process.env
const URL = `https://api.rawg.io/api/games`

    const getVideogameByName = async (name) => {
        try {
            
            const dbGames = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    } 
                }
            });
            const { data } = await axios(`${URL}?key=${API_KEY}&search=${name}`);
            
            const apiGames = data.results.map(({id, name, platforms, background_image, released, rating, genres}) => ({
                id,
                name,
                platforms,
                image: background_image,
                released,
                rating,
                genres
            }))
            const allGames = [...dbGames, ...apiGames]
            const gameFounds = allGames.slice(0,15)
            return gameFounds;
            
        } catch (error) {

            throw error;
        }
}
module.exports = {
    getVideogameByName
}

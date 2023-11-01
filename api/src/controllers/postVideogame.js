const { Videogame } = require('../db');

const createGame = async (game) => {
    
        try {
            const newGame = await Videogame.create(game);
            return newGame;
        } catch (error) {
            throw new Error('No se pudo crear el juego');
        }
}

module.exports = {
    createGame
}
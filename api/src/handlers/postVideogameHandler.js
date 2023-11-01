const { postVideogame } = require('../controllers/postVideogame');

const postVideogameHandler =  async (req, res) => {
    try {
        const { name, description, platforms, image, dateReleased, rating} = req.body;

        const gameData = {
            name,
            description,
            platforms,
            image,
            dateReleased,
            rating,

        };
        const newGame = await postVideogame.createGame(gameData);
        return res.status(201).json(newGame);
    } catch (error) {
        return res.status(400).json({Error: error.message});
    }
}

module.exports = {
    postVideogameHandler
}

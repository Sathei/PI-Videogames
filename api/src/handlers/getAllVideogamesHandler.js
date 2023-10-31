const { getAllVideogames} = require('../controllers/getAllVideogames')
const getAllVideogamesHandler = async (req, res) => {
    try {
        const games = await getAllVideogames();
        res.status(200).json(games);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllVideogamesHandler,
};
const { getVideogameById } = require('../controllers/getVideogameById')
const getVideogameByIdHandler = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const game = await getVideogameById(id);
        res.status(200).json(game);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getVideogameByIdHandler,
};
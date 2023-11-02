const { getVideogameByName } = require('../controllers/getVideogameByName');

const getVideogameByNameHandler = async (req,res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }
    try {
        const gameFound = await getVideogameByName(name);
        return res.status(200).json(gameFound);
    } catch (error) {
        return res.status(400).json("no se encuentra");
    }
}

module.exports = {
    getVideogameByNameHandler
}
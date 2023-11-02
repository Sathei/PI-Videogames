const { Videogame } = require('../db'); // Asumiendo que Videogame es tu modelo de base de datos

const getVideogameByUUID = async (uuid) => {
    try {
        const dbGame = await Videogame.findOne({
            where: { uuid: uuid }, // Busca por el campo UUID
        });

        if (dbGame) {
            // Si se encuentra en la base de datos, devuelve los datos de la base de datos
            return dbGame.toJSON();
        } else {
            // Si no se encuentra en la base de datos, realiza una solicitud a la API
            // y sigue el mismo proceso que mencioné anteriormente
            // ...
        }
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getVideogameByUUID,
};

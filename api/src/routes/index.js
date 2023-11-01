const { Router } = require('express');
// Importar todos los routers;
const { getAllVideogamesHandler } = require('../handlers/getAllVideogamesHandler');
const { getVideogameByIdHandler } = require('../handlers/getVideogamesByIdHandler');
const { getVideogameByNameHandler} = require('../handlers/getVideogameByNameHandler');
const { getGenresHandler } = require('../handlers/getGenresHandler');
const { postVideogameHandler } = require('../handlers/postVideogameHandler')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getAllVideogamesHandler);

router.get('/videogames/:id', getVideogameByIdHandler);

router.get('/videogames/name', getVideogameByNameHandler);

router.get('/genres' , getGenresHandler);

router.post('/videogames' , );

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

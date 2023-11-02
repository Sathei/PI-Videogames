const { Router } = require('express');
// Importar todos los routers;
const { getAllVideogamesHandler } = require('../handlers/getAllVideogamesHandler');
const { getVideogameByIdHandler } = require('../handlers/getVideogamesByIdHandler');
const { getVideogameByNameHandler} = require('../handlers/getVideogameByNameHandler');
const { getGenresHandler } = require('../handlers/getGenresHandler');
const { postVideogameHandler } = require('../handlers/postVIdeogameHandler')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.get('/videogames', getAllVideogamesHandler);

router.get('/videogames/name', getVideogameByNameHandler);

router.get('/videogames/:id', getVideogameByIdHandler);

router.get('/genres' , getGenresHandler);

router.post('/videogames' , postVideogameHandler );

// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

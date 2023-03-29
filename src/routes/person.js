let express = require('express'); //inyección de la dependencia de express
let router = express.Router(); // instalación del "router" al que asociaremos todas nuestras rutas

// Aquí se declaran las rutas pero cambiando "app" por "router"
router.get('/person', (req, res) => { //se crea la ruta de prueba
    res.send('has solicitado el listado de personas');
});

module.exports = router; // se exporta el router de express
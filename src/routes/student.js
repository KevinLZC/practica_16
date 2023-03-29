let express = require('express'); //inyección de la dependencia de express
let router = express.Router(); // instalación del "router" al que asociaremos todas nuestras rutas

// Aquí se declaran las rutas pero cambiando "app" por "router"
router.get('/student', (req, res) => { //se crea la ruta para acceder al formulario
    res.render('student');
});
router.post('/addStudent', (req, res) => { //ruta de renderizado de datos
    res.render('displayData', {nombre: req.body.nombre,
                            edad: req.body.edad, 
                            nss: req.body.nss, 
                            tipoSangre: req.body.tipoSangre});
});

/*router.post('/addStudent', (req, res) => { 
    res.send(`  Nombre: ${req.body.nombre}
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tipoSangre}
            `
            );
});*/

module.exports = router;
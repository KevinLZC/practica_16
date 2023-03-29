let express = require('express'); // inyección de la dependencia express
let app = express(); // declaración de la app para que funcione el servidor
let PORT = process.env.PORT || 3000; // declaración del puerto de escucha
let studentRoute = require('./routes/student'); // incluimos las rutas del archivo student
let personRoute = require('./routes/person'); // incluimos las rutas del archivo person

app.use(express.urlencoded({ extended: false })); //indicación para PARSEAR peticiones con urlencoded payload   
app.set('view engine', 'ejs'); // declaración de EJS como motor de renderizado
app.use(studentRoute); // Habilita la utilización de las rutas del archivo student
app.use(personRoute); // Habilita la utilización de las rutas del archivo person
app.use('/assets', express.static(__dirname + '/../public')); // declaración de una carpeta virtual

app.listen(PORT, () => {    
    console.log('Escuchando por el puerto 3000');
});
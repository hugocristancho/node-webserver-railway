import express from 'express';
import hbs from 'hbs';
import * as url from 'url';
import 'dotenv/config'
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir conrenido estatico

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Hugo Cristancho',
        titulo: 'Curso de node'
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Hugo Cristancho',
        titulo: 'Curso de node'
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Hugo Cristancho',
        titulo: 'Curso de node'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// });
// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// });
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
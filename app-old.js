import http from 'http'


http.createServer((req, res) => {
    // console.log(req);
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(201, { 'Content-Type': 'application/csv' });

    // res.writeHead(201, { 'Content-Type': 'application/json' });
    // const persona = {
    //     id: 1,
    //     nombre: 'Fernando'
    // };
    // res.write(JSON.stringify(persona));
    res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log('Escuchando el puerto', 8080);

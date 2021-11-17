const http = require('http');

// console.log(http)

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Este es mi servidor</h1>');
    res.end();
})

servidor.listen(3001, () => {
    console.log('Servidor esta funcionando');
})
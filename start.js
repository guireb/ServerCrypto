const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
    });
    socket.write('serv: bien recu. bonjour moi c gui !');
    socket.end('serv: terminé.');
}).on('error', (err) => {
    console.error(err);
});

server.listen(8080, () => {
    console.log('Ouverture de la co sur', server.address().port);
});

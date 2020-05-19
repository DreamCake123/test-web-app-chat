const express = require('express');
const socket = require('socket.io');

//Initialization

const app = express();
const server = app.listen(3000, () => console.log("Server is on port 3000"));
var io = socket(server);

//Express 
app.use(express.static('public'));
//SocketIO
io.on('connection', (socket) => {
    console.log('Socket connection successful', socket.id)

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
        console.log("Message: " + data.msg_);
    });
});


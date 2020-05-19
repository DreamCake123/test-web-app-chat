//Make connection with SOCKET IO
var socket = io.connect();
//Query DOM
var msg = document.getElementById('message-box'),
    send = document.getElementById('send'),
    output = document.getElementById('chat-messages');

//Add event to DOM
send.addEventListener('click', () => {
    socket.emit('chat', {
        msg_: msg.value
    });
    msg.value = "";
});

//Receive events
socket.on('chat', (data) => {
    output.innerHTML += '<p>' + data.msg_ + '</p>';
});

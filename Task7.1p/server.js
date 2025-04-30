const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const routeuser = require('./routes/routeuser');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

mongoose.connect('mongodb://0.0.0.0/your-db-name');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

app.use('/', routeuser);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('number', randomNum);
  }, 1000);
});

const 
port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

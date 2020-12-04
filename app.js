const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Set port number
const port = 3000;

// Set mongodb link
const mongoDB =
  'mongodb+srv://emile:pasta123@pastapacket.pz52b.mongodb.net/PastaPacket?retryWrites=true&w=majority';

// Load database
mongoose.connect(mongoDB);
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check connection
db.once('open', function () {
  console.log('Connected to mongoDB.');
});

// Check db errors
db.on('error', function (err) {
  console.log(err);
});

// Init app
const app = express();

// Bring in Models
let Packet = require('./models/packet');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve all static files in public directory
// app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', function (req, res) {
  Packet.find({}, function (err, packets) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Packets',
        packets: packets,
      });
    }
  });
});

// Start server
app.listen(port, function () {
  console.log(`Express server listening on port ${port}!`);
});

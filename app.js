const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
const Packet = require('./models/packet');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', function (req, res) {
  Packet.find({}, function (err, packs) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Packets',
        packets: packs,
      });
    }
  });
});

// Get Single Packet
app.get('/packet/:id', function (req, res) {
  Packet.findById(req.params.id, function (err, packet) {
    res.render('packet', {
      packet: packet,
    });
  });
});

// Add Route
app.get('/packets/add', function (req, res) {
  res.render('add_packet', {
    title: 'Add Packet',
  });
});

// Add Submit POST route
app.post('/packets/add', function (req, res) {
  const packet = new Packet();
  packet.title = req.body.title;
  packet.price = req.body.price;
  packet.description = req.body.description;

  packet.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// Start server
app.listen(port, function () {
  console.log(`Express server listening on port ${port}!`);
});

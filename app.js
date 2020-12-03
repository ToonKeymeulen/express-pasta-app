const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Set port number
const port = 3000;

// Set mongodb link

// Init app
const app = express();

// Bring in Models
const Packet = require('./models/packet');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve all static files in public directory
// app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', function (req, res) {
  let packets = [
    {
      id: 1,
      title: 't1',
      price: '5eur',
      description: 'testinggg',
    },
    {
      id: 2,
      title: 't2',
      price: '5eur',
      description: 'testinggg',
    },
    {
      id: 3,
      title: 't3',
      price: '5e100eurur',
      description: 'jfasd;fhas',
    },
  ];
});

// Route Files
// const packets = require('./routes/packets');

// app.use('/packets', packets);

// Start server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

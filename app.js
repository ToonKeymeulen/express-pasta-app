const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// Set mongodb link
const mongoDB =
  'mongodb+srv://pasta123:pasta123@pastapacket.pz52b.mongodb.net/pasta_app?retryWrites=true&w=majority';

// import the route modules
const routes = require('./routes');

// Init app
const app = express();

const port = 3000;

// Load view engine
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Serve all static files in /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set routes (default to index)
app.use('/', routes());

// Load database
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Start server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

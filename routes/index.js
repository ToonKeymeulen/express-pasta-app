const express = require('express');

const aboutRoute = require('./about');
const orderRoute = require('./order');
const pastainfoRoute = require('./pastainfo');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('views/index', { pageTitle: 'Welcome' });
  });

  router.use('/about', aboutRoute());
  router.use('/order', orderRoute());
  router.use('/pastainfo', pastainfoRoute());

  return router;
};

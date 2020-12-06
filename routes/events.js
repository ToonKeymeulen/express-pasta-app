const express = require('express');

const router = express.Router();

// Bring in Model
const Event = require('../models/event');

// Main Route
router.get('/', function (req, res) {
  Event.find({}, function (err, evs) {
    if (err) {
      console.log(err);
    } else {
      res.render('events', {
        title: 'Events',
        events: evs,
      });
    }
  });
});

// Get Single Event
router.get('/:id', function (req, res) {
  Event.findById(req.params.id, function (err, p) {
    res.render('event', {
      event: p,
    });
  });
});

// Load Edit Form
router.get('/edit/:id', function (req, res) {
  Event.findById(req.params.id, function (err, p) {
    res.render('edit_event', {
      title: 'Edit Event',
      event: p,
    });
  });
});

// Update Submit POST route
router.post('/edit/:id', function (req, res) {
  const event = {};
  event.title = req.body.title;
  event.price = req.body.price;
  event.description = req.body.description;

  const query = { _id: req.params.id };

  Event.updateOne(query, event, function (err) {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Event Updated');
      res.redirect('/');
    }
  });
});

// Delete Event
router.delete('/:id', function (req, res) {
  const query = { _id: req.params.id };

  Event.deleteOne(query, function (err) {
    if (err) {
      console.log(err);
    }
    res.send('Success');
  });
});

module.exports = router;

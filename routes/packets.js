const express = require('express');

const router = express.Router();

// Bring in Model
const Packet = require('../models/packet');

// Add Route
router.get('/add', function (req, res) {
  res.render('add_packet', {
    title: 'Add Packet',
  });
});

// Add Submit POST route
router.post('/add', function (req, res) {
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('price', 'Price is required').notEmpty();
  req.checkBody('description', 'Description is required').notEmpty();

  // Get errors
  const err = req.validationErrors();

  if (err) {
    res.render('add_packet', {
      title: 'Add Article',
      errors: err,
    });
  } else {
    const packet = new Packet();
    packet.title = req.body.title;
    packet.price = req.body.price;
    packet.description = req.body.description;

    packet.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        req.flash('success', 'Packet Added');
        res.redirect('/');
      }
    });
  }
});

// Get Single Packet
router.get('/:id', function (req, res) {
  Packet.findById(req.params.id, function (err, p) {
    res.render('packet', {
      packet: p,
    });
  });
});

// Load Edit Form
router.get('/edit/:id', function (req, res) {
  Packet.findById(req.params.id, function (err, p) {
    res.render('edit_packet', {
      title: 'Edit Packet',
      packet: p,
    });
  });
});

// Update Submit POST route
router.post('/edit/:id', function (req, res) {
  const packet = {};
  packet.title = req.body.title;
  packet.price = req.body.price;
  packet.description = req.body.description;

  const query = { _id: req.params.id };

  Packet.updateOne(query, packet, function (err) {
    if (err) {
      console.log(err);
    } else {
      req.flash('success', 'Packet Updated');
      res.redirect('/');
    }
  });
});

// Delete Packet
router.delete('/:id', function (req, res) {
  const query = { _id: req.params.id };

  Packet.deleteOne(query, function (err) {
    if (err) {
      console.log(err);
    }
    res.send('Success');
  });
});

module.exports = router;

const express = require('express');

const router = express.Router();
const Packet = require('../models/packet');

router.get('/', function (req, res) {
    Packet.find({}, function (err, packs) {
      if (err) {
        console.log(err);
      } else {
        res.render('packets_order', {
          title: 'Packets',
          packets: packs,
        });
      }
    });
  });

  module.exports = router;
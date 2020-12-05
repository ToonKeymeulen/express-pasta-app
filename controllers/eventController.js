const Event = require('../models/event');

exports.get_all_events = function (req, res) {
    Event.find({}, function (err, evs) {
      if (err) {
        console.log(err);
      } else {
        res.render('index', {
          title: 'Steun ons door massaal pasta te eten :)',
          events: evs,
        });
      }
    });
  };
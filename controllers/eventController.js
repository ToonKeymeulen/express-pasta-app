const Event = require('../models/event');


//render the index page with one upcoming event
exports.index = function (req, res, ) {
  Event.findOne({ title: 'Online Kerstspel' }, function (err, ev) {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Pasta-actie van Scouts Hubertus',
        event: ev,
      });
    }
  });
  };

// render the event page with all the events
  exports.evenementen = function (req, res) {
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
  };

  // render event page for one event

  exports.render_one = function (req, res) {
    Event.findById(req.params.id, function (err, p) {
      res.render('event', {
        event: p,
      });
    });
  };
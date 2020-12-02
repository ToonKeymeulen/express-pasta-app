var express = require('express');
var router = express.Router();
/*These files contain code fo rhandling particular sets of related routes.*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Piemels' });
});


module.exports = router;

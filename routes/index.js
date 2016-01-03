var express = require('express');
var router = express.Router();

/*import model of mongodb*/
var User = require('../model/user').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/page/index.html');
});

router.get('/', function(req, res, next) {
  User.find({})
});

module.exports = router;

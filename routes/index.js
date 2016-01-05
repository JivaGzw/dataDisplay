var express = require('express');
var router = express.Router();
var redis = require('redis');
var redisDb = redis.createClient();
var mongoose = require('mongoose');

/*import model of mongodb*/
var User = require('../model/user').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/page/index.html');
});

router.post('/data', function(req, res, next) {
  redisDb.hgetall("statisticData", function(err, obj) {
    if(err) {
      console.log(err);
    }
    console.log(obj);
    res.json(obj);
  });
});

module.exports = router;

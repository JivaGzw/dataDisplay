var redis = require('redis');
var redisDb = redis.createClient();
var mongoose = require('mongoose');

/*import model of mongodb*/
var User = require('../model/user').User;

getUserCount =  function() {
  User.find({}).count().exec(function(err, counted) {
      if(err) {
        console.log(err);
      }
      redisDb.hset("statisticData", "userCount", counted, function(err, saved) {
        if(err) {
          console.log(err);
        }
        /*redisDb.get("userCount", function(err, got) {
          if(err) {
            console.log(err);
          }
          console.log("userCount get: "+ got);
        });*/
      });
    });
};

getUserScale = function() {
  User.find({followers: {$lt: 10}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_0_10", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt: 10, $lt: 100}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_10_100", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt: 100, $lt: 1000}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_100_1000", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt: 1000, $lt: 3000}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_1000_3000", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt:3000, $lt: 5000}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_3000_5000", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt: 5000, $lt: 8000}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_5000_8000", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({followers: {$gt: 8000}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "followers_8000_end", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });
};

getUserLocation = function() {
  User.find({address: {$regex: /.*北京.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "beijing", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*黑龙江.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "heilongjiang", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*内蒙古.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "neimenggu", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*吉林.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "jilin", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*辽宁.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "liaoning", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*天津.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "tianjin", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*河北.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "hebei", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*山西.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "shanxi", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*山东.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "shandong", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*宁夏.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "ningxia", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*甘肃.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "gansu", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*新疆.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "xinjiang", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*青海.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "qinghai", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*西藏.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "xizang", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*河南.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "henan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*江苏.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "jiangsu", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*安徽.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "anhui", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*湖北.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "hubei", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*重庆.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "chongqing", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*四川.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "sichuan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*云南.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "yunnan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*贵州.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "guizhou", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*湖南.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "hunan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*江西.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "jiangxi", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*上海.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "shanghai", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*浙江.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "zhejiang", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*福建.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "fujian", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*广西.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "guangxi", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*广东.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "guangdong", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*陕西.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "ningxia", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*海南.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "hainan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*澳门.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "aomen", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*香港.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "xianggang", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });

  User.find({address: {$regex: /.*台湾.*/}}).count().exec(function(err, counted) {
    if(err) {
      console.log(err);
    }
    redisDb.hset("statisticData", "taiwan", counted, function(err, saved) {
      if(err) {
        console.log(err);
      }
    });
  });
};

refreshRedis = function(cb) {
  console.log("Start to set clock in order to refresh redis data.Time setInterval 21600000 ms.");
  setInterval(function() {
    getUserCount();
    getUserScale();
    getUserLocation();
    cb();
   
  }, 21600000);
};

getInitialStatistic = function(cb) {
  console.log("Start to get initial data.Please be patient, It may take few time.");
  getUserCount();
  getUserScale();
  getUserLocation();
  cb();
  
};

exports.refreshRedis = refreshRedis;
exports.getInitialStatistic = getInitialStatistic;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define article Schema
var UserSchema = new Schema({
  homePage: String,
  registerTime: String,
  followingUser: [String],
  followersUser: [String],
  followers: String,
  following: String,
  address: String,
  nickName: String, 
  id: Number
});

exports.User = mongoose.model('User', UserSchema);
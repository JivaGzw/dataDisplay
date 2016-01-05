var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define article Schema
var UserSchema = new Schema({
  homePage: String,
  registerTime: String,
  followingUser: [String],
  followersUser: [String],
  followers: Number,
  following: Number,
  address: String,
  nickName: String, 
  id: Number
},{collection: 'tuchongUser'});

exports.User = mongoose.model('User', UserSchema);
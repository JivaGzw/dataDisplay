var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define article Schema
var CameraSchema = new Schema({
  band: String,
  type: String,
  totalImage: Number,
  newImage: Number
},{collection: 'tuchongCamera'});

exports.Camera = mongoose.model('Camera', CameraSchema);
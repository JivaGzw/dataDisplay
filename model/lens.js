var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//define article Schema
var LensSchema = new Schema({
  band: String,
  type: String,
  totalImage: Number,
  newImage: Number
},{collection: 'tuchongLens'});

exports.Lens = mongoose.model('Lens', LensSchema);
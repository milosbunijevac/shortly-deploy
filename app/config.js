
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection'));
db.once('open', function() {
  console.log('Mongodb connection is open!');
});

module.exports = db;

var schemaURLS = mongoose.Schema;
var urls = new schemaURLS({
  id: Number,
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  time: {type: Date, default: Date.now }

});

var schemaUsers = mongoose.Schema;
var users = new schemaUsers({
  username: String,
  password: String,
  time: {type: Date, default: Date.now }
});



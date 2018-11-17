var mongoose = require('mongoose');
var user = new mongoose.Schema({
  username: {type: String},
  password: {type: String}
});


module.exports = mongoose.model('user', user);

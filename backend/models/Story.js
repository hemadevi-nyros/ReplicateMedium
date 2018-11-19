var mongoose = require('mongoose')
var story = new mongoose.Schema(
    {
        title:{type: String},
        description:{type: String},
        content: {type: String}
        
});

module.exports = mongoose.model('story', story);
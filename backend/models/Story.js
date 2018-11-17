var mongoose = require('mongoose')
var StorySchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        
);

StorySchema.methods.getUserStory = function (_id) {
    Story.find({'title': _id}).then((story) => {
        return story
    })
}
module.exports = mongoose.model('Story', StorySchema)

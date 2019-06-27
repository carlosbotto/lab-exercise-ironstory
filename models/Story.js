const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const storySchema = new Schema({
  content: {type: String, required: true},
  writer: String,
  date: { type :Date, default: Date.now}
});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;


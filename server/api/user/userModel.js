
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },

  address: {
    state: String
  },
  posts: [
    {ref: 'posts', type: Schema.Types.ObjectId}
  ]

});

module.exports = mongoose.model('user', UserSchema);

var mongoose = require('mongoose');

mongoose.conect('mongodb://localhost/todos');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
});

var Todo = mongoose.model('todo', TodoSchema);
Todo.create({
  name: 'blargagiandgkang!!!',
  completed: false
}).then(function(err, todo) {
  console.log(err, todo);
});

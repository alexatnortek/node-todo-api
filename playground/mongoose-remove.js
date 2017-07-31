const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '597f9cc4be504d9601a2a104'}).then((todo) => {
  console.log(todo);
});

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('597f9cc4be504d9601a2a104').then((todo) => {
  console.log(todo);
});

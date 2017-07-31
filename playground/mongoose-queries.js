const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// var id = '597d22ba759b8438cc6be781';

// var id = '597e30402de8783ca300552411';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid.');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found.');
//   }
//   console.log('Todo by Id: ', todo);
// }).catch((e) => console.log(e));

User.findById('597d22ba759b8438cc6be781').then((user) => {
  if(!user){
    return console.log('Id not found.');
  }
  console.log('User by Id: ', JSON.stringify(user, undefined, 2));
}, (e) => console.log(e));

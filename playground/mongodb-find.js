// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to conect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  // db.collection('Todos').find({
  //   _id: new ObjectID('597a4c3ebe504d9601a184cc')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to find docs', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to find docs', err);
  // });

  db.collection('Users').find({
    name: 'Alex'
  }).toArray().then((docs) => {
    console.log(`Users: `, JSON.stringify(docs, undefined, 4));
  }, (err) => {
    console.log('Unable to find docs', err);
  });

  // db.close();
})

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to conect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('597a6513be504d9601a1901b')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('597a48daeef9c0328bafc9e2')
  }, {
    $set: {
      name: 'Alex'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});

const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$TpcWRPkDsk3zRfvE8vnbZOHXgrtbGItr5bPqnfE5VP3vhH2FVoScG';

bcrypt.compare('123', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123abc');
//
// console.log(token);
// console.log('length: ', token.length);
//
// var decoded = jwt.verify(token, '123abc');
//
// console.log('decoded: ', decoded);



// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
// console.log(`Hash length: ${hash.length}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (token.hash === resultHash){
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }

const express = require('express');
const bodyParser = require('body-parser');

const Data = require('./data.js').Data;
const {mongoose} = require('./db/mongoose.js');

const app = express();
// database.initializeMongo();
app.use(bodyParser.json('application/json'));

app.post('/', function (req, res) {
  // var {email, name, mass, eyes} = req.body;
  var data = new Data(req.body);
  console.log(data);
  data.saveTo().then(() => {
    console.log('saved');
    res.send("your child's data was saved to db");
  }).catch((e) => {
    console.log('saving failed');
    res.send({text: 'error occured', message: e.message});
  });
  // res.send(body);
  // console.log(`name: ${name}, mass: ${mass}, eyes: ${eyes}, email: ${email}`);
  // res.send(`name: ${name}, mass: ${mass}, eyes: ${eyes}, email: ${email}`);
});

app.listen(3000, function () {
  console.log('listen on 3000');
});

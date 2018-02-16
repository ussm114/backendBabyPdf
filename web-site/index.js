const express = require('express');
const bodyParser = require('body-parser');

const Data = require('./data.js').Data;
const {mongoose} = require('./db/mongoose.js');

const app = express();
// database.initializeMongo();
app.use(bodyParser.json('application/json'));

app.post('/', function (req, res) {
  // var {email, name, mass, eyes} = req.body;
  var body = req.body;
  console.log(body);
  var data = new Data(body);
  console.log(data);
  data.saveTo().catch((e) => {
    res.send({text: 'error occured', message: e.message});
  });
  res.send(body);
  // console.log(`name: ${name}, mass: ${mass}, eyes: ${eyes}, email: ${email}`);
  // res.send(`name: ${name}, mass: ${mass}, eyes: ${eyes}, email: ${email}`);
});

app.listen(3000, function () {
  console.log('listen on 3000');
});

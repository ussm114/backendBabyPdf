var mongoose = require('mongoose');

const DATABASE_CONNECTION =  'mongodb://mongo/test'; // for docker
const LOCAL_CONNECTION_Mateusz = 'mongodb://localhost:27017/babyPdfUsers'; //for local mongo

mongoose.Promise = global.Promise; //powiedz mongoose zeby korzystał z obietnic JSowych, a nie 3rd party
mongoose.connect(DATABASE_CONNECTION);
module.exports = {
  mongoose
};


// -----------not used-------------------

exports.initializeMongo = function () {
  //mongoose.connect(DATABASE_CONNECTION);
  mongoose.connect('mongodb://localhost:27017/babyPdfUsers');

  console.log('tying to connect to ' + DATABASE_CONNECTION);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'conncection error: '));
  db.once('open', function () {
    console.log('db connected');
  });
};

var mongoose = require('mongoose');

const DATABASE_CONNECTION =  'mongodb://mongo/test'; // for docker
const LOCAL_CONNECTION_Mateusz = 'mongodb://localhost:27017/babyPdfUsers'; //for local mongo

mongoose.Promise = global.Promise; //powiedz mongoose zeby korzystał z obietnic JSowych, a nie 3rd party
mongoose.connect(LOCAL_CONNECTION_Mateusz);

module.exports = {
  mongoose
};

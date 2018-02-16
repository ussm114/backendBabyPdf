const mongoose = require('mongoose');

var dataSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  eyes: {
    type: String,
    required: true
  },
  mass: {
    type: String,
    required: true
  }
});

dataSchema.methods.saveTo = function () {
  return this.save().then(() => {
    console.log('saved');
  }).catch((e) => {
    console.log(e);
  });
};

Data = exports.Data = mongoose.model('Data', dataSchema);






// var addRandomCat = function () {
//   var silence = new Kitten({
//     name: 'silencee' + Math.random()
//   });
//   silence.save(function (err, fluffy) {
//     if(err) {
//       return console.error(err);
//     }
//     console.log('ther is new rand cat ....');
//   });
// };

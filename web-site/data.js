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
  //na tę chwilę tyle wystarczy
  return this.save();
  // return this.save().then(() => {
  //   return console.log('saved');
  // }, () => {
  //   return console.log('saving failed!');
  // });
};

Data = exports.Data = mongoose.model('Data', dataSchema);

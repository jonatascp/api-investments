var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Poupanca = new Schema({
  poupanca: {
    title: String
  }
});
//module.exports = mongoose.model('Poupanca', Poupanca);
module.exports = Poupanca;
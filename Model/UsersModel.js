const mongoose = require("mongoose");
const moment = require('moment-timezone');
const dateBrazil = moment.tz(Date.now(), "America/Sao_Paulo");

var SchemaUsers = mongoose.Schema({
   _id: ObjectId,
   cim: String,
   nome: String,
   email: String,
   password: String,
   status: String,
   token: String,
   uuid: String,
   dateCreated: {
      type: Date,
      default: dateBrazil
   },
   dateUpdate: {
      type: Date,
      default: dateBrazil
   }
});

//const UsersModel = mongoose.model('users',SchemaUsers); 

module.exports = mongoose.model('users', SchemaUsers); 
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost/16appjam1');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id : {type : String, unique : true},
  passwd : {type : String},
  phone : {type : String},
  her : {type : String},
  token : {type : String}
})

var Users = mongoose.model('users', UsersSchema);

require('./err')(UsersSchema);

export {Users};

export default db;

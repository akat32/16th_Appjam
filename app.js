import express from 'express'
var app = express();
import rndstring from 'randomstring'
import bodyParser from 'body-parser'
import path from 'path'
var http = require('http').Server(app);
var io = require('socket.io')(http)
import  cors from 'cors'
import request from 'request'
import {Users} from './mongo';

require('./func')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const PORT = 3033;


http.listen(PORT, ()=>{
  console.log('Server On!')
})

require('./routes/auth')(app, Users, rndstring);
require('./routes/drink')(app, request)
require('./routes/chat')(app, io, rndstring)

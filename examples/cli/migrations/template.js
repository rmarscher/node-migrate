// use `migrate create add-pets --template-file migrations/template`

'use strict';

var db = require('./db');

exports.up = function(next){
  next();
};

exports.down = function(next){
  next();
};

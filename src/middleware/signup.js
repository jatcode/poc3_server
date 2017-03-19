'use strict';
var CLIENT = require('../constants');
// import { CLIENT } from '../constants';
module.exports = function(app) {
  return function(req, res, next) {
    
    // Perform actions
    const body = req.body;
    console.log('the body',body);
    app.service('users').create({
      email:body.email,
      password:body.password
    })
    .then(user=>res.redirect('login.html'))
    .catch(next);
  };
};

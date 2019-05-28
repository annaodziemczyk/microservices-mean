const express = require('express');
const asyncHandler = require('express-async-handler');
const request = require("request");
const endpoints = require("../config/endpoints");
const _ = require("lodash");

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), login);
router.post('/login', login);
router.get('/me', token);

const USER_SERVICE = endpoints.usersService;

async function register(req, res, next) {
  var options = {};
  options = _.defaults(options, USER_SERVICE.register);
  options.uri = USER_SERVICE.register.uri({baseUrl:USER_SERVICE.baseUrl});
  options.body = req.body;

  request(options, function(error, response, body) {
      if(error) {
        return next(error);
      }

      return res.send(response.body);
  });
}

function login(req, res) {

  var options = {};
  options = _.defaults(options, USER_SERVICE.login);
  options.uri = USER_SERVICE.login.uri({baseUrl:USER_SERVICE.baseUrl});
  options.body = req.body;
  console.log(req.body);

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function token(req, res) {

  var options = {};
  options = _.defaults(options, USER_SERVICE.token);
  options.uri = USER_SERVICE.token.uri({baseUrl:USER_SERVICE.baseUrl});
  options.headers = req.headers;

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });

}

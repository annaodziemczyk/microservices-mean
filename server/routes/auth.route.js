const express = require('express');
const asyncHandler = require('express-async-handler');
var request = require("request");

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), login);
router.post('/login', login);
router.get('/me', token);
// router.post('/login', passport.authenticate('local', { session: false }), login);
// router.get('/me', passport.authenticate('jwt', { session: false }), login);


async function register(req, res, next) {
  var options = {
    uri: "http://localhost:3001/api/register",
    method: 'POST',
    json: true,
    body: req.body
  };
  console.log("register");

  request(options, function(error, response, body) {
      if(error) {
        return next(error);
      }

      return res.send(response.body);


  });

}

function login(req, res) {
  var options = {
    uri: "http://localhost:3001/api/login",
    method: 'POST',
    json: true,
    body: req.body
  };

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    if(response.statusCode!=200){
      res.statusCode=response.statusCode;
      return res.send();
    }else{
      return res.send(response.body);
    }

  });
}

function token(req, res) {

  var options = {
    uri: "http://localhost:3001/api/token",
    method: 'POST',
    json: true,
    body: req.body
  };

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    if(response.statusCode!=200){
      res.statusCode=response.statusCode;
      return res.json();
    }else{
      let  auth = response.body;
      return res.json(auth.user);
    }

  });

}

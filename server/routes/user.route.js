const express = require('express');
const request = require("request");
const endpoints = require("../config/endpoints");
const _ = require("lodash");

const router = express.Router();
module.exports = router;

router.get('/list', listUsers);

const USER_SERVICE = endpoints.usersService;

function listUsers(req, res) {

  var options = {};
  options = _.defaults(options, USER_SERVICE.listUsers);
  options.uri = USER_SERVICE.listUsers.uri({baseUrl:USER_SERVICE.baseUrl});
  console.log(options);

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });

}

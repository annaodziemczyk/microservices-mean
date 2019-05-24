const express = require('express');
const router = express.Router();
var request = require("request");

router.get('/customer/:id', getSingleCustomer);

const CUSTOMER_SERVICE = "http://localhost:3004/api/";

function getSingleCustomer(req, res) {

  var options = {
    uri: CUSTOMER_SERVICE + "customer/" + req.params.id,
    method: 'GET'
  };

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    if(response.statusCode!=200){
      res.statusCode=response.statusCode;
    }

    return res.send(response.body);

  });
}


module.exports = router;

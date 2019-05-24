const express = require('express');
const router = express.Router();
var request = require("request");

router.get('/product', getProducts);
router.post('/product', addProduct);
router.post('/imageUpload', uploadImage);

const CATALOGUE_SERVICE = "http://localhost:3002/api/";
var productImage;

function getProducts(req, res) {
  console.log("getting products");
  var options = {
    uri: CATALOGUE_SERVICE + "products",
    method: 'GET'
  };

  request(options, function(error, response, body) {
    console.log(response.body);
    if(error) {
      return error;
    }

    if(response.statusCode!=200){
      res.statusCode=response.statusCode;
    }

    return res.send(response.body);

  });
}

function uploadImage(req, res) {
  console.log("body" + req.body)
}

function addProduct(req, res) {
  request.body["image"]= productImage;
  var options = {
    uri: CATALOGUE_SERVICE + "products",
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
    }
    return res.json();

  });
}
module.exports = router;

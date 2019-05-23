const express = require('express');
const router = express.Router();

router.post('/product', addProduct);
router.post('/imageUpload', uploadImage);

const CATALOGUE_SERVICE = "http://localhost:3002/api/";

function uploadImage(req, res) {
  console.log("body" + req.body)
}

function addProduct(req, res) {
  var options = {
    uri: CATALOGUE_SERVICE + "product",
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

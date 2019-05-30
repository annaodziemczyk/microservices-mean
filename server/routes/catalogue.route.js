const express = require('express');
const router = express.Router();
const request = require("request");
const endpoints = require("../config/endpoints");
const _ = require("lodash");
const fs = require("fs");

router.get('/product', getProducts);
router.post('/product', addProduct);
router.delete('/product/:id', deleteProduct);
router.put('/product/:id', updateProduct);

const CATALOGUE_SERVICE = endpoints.catalogueService;

function getProducts(req, res) {

  var options = {};
  options = _.defaults(options, CATALOGUE_SERVICE.listItems);
  options.uri = options.uri({baseUrl:CATALOGUE_SERVICE.baseUrl});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    res.status = response.status;

    return res.send(response.body);

  });
}

function addProduct(req, res) {
  var options = {};
  options = _.defaults(options, CATALOGUE_SERVICE.addProduct);
  options.uri = options.uri ({baseUrl:CATALOGUE_SERVICE.baseUrl});
  //req.fields["file"] = fs.createReadStream(req.files["image"].path);
  options.formData = req.fields;
  console.log(req.fields);
  console.log(req.body);

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function deleteProduct(req, res) {
  var options = {};
  options = _.defaults(options, CATALOGUE_SERVICE.deleteProduct);
  options.uri = options.uri ({baseUrl:CATALOGUE_SERVICE.baseUrl, id:req.params.id});

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function updateProduct(req, res) {
  var options = {};
  options = _.defaults(options, CATALOGUE_SERVICE.updateProduct);
  options.uri = options.uri ({baseUrl:CATALOGUE_SERVICE.baseUrl, id:req.params.id});
  options.body = req.body;

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}
module.exports = router;

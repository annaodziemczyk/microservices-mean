const express = require('express');
const router = express.Router();
const request = require("request");
const endpoints = require("../config/endpoints");
const _ = require("lodash");

router.get('/products/:id', getCart);
router.get('/products/:id/combine/:userId', combineCarts);
router.get('/products/user/:id', getUserCart);
router.put('/products/:id/addItem', addProduct);
router.put('/products/:id/removeItem', removeProduct);
router.post('/products', createCart);

const CART_SERVICE = endpoints.cartService;

function createCart(req, res) {
  console.log("create cart");
  var options = {};
  options = _.defaults(options, CART_SERVICE.createCart);
  options.uri = options.uri ({baseUrl:CART_SERVICE.baseUrl});
  options.body = req.body;
  console.log(options);
  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function getCart(req, res) {
  var options = {};
  options = _.defaults(options, CART_SERVICE.listCart);
  options.uri = options.uri({baseUrl:CART_SERVICE.baseUrl, id:req.params.id});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function getUserCart(req, res) {
  var options = {};
  options = _.defaults(options, CART_SERVICE.userCart);
  options.uri = options.uri({baseUrl:CART_SERVICE.baseUrl, id:req.params.id});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function combineCarts(req, res) {

  var options = {};
  options = _.defaults(options, CART_SERVICE.combineCarts);
  options.uri = options.uri ({baseUrl:CART_SERVICE.baseUrl, id:req.params.id, userId:req.params.userId});

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function addProduct(req, res) {

  var options = {};
  options = _.defaults(options, CART_SERVICE.addCartItem);
  options.uri = options.uri ({baseUrl:CART_SERVICE.baseUrl, id:req.params.id});
  options.body = req.body;

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function removeProduct(req, res) {

  var options = {};
  options = _.defaults(options, CART_SERVICE.removeCartItem);
  options.uri = options.uri ({baseUrl:CART_SERVICE.baseUrl, id:req.params.id});
  options.body = req.body;

  request(options, function(error, response, body) {
    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}
module.exports = router;

const express = require('express');
const router = express.Router();
const request = require("request");
const endpoints = require('../config/endpoints');
const _ = require('lodash');

router.get('/', getCustomers);
router.get('/:id', getSingleCustomer);
router.post('/', createCustomer);
router.put('/', updateCustomer);
router.delete('/:id/removeContact/:contactId', removeContact);
router.post('/:id/addContact', addContact);
router.delete('/:id/removeAddress/:addressId', removeAddress);
router.post('/:id/addAddress', addAddress);

const CUSTOMER_SERVICE = endpoints.customerService;

function addAddress(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.addAddress);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id});
  options.body=req.body;

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function removeAddress(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.removeAddress);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id, addressId:req.params.addressId});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function addContact(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.addContact);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id});
  options.body = req.body;

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function removeContact(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.removeContact);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id, contactId:req.params.contactId});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function createCustomer(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.createCustomer);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl});
  options.body = req.body;

  console.log(options);

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function updateCustomer(req, res) {
  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.updateCustomer);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id});
  options.body = req.body;

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}
function getCustomers(req, res) {

  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.listCustomers);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}

function getSingleCustomer(req, res) {

  var options = {};
  options = _.defaults(options, CUSTOMER_SERVICE.getSingleCustomer);
  options.uri = options.uri({baseUrl:CUSTOMER_SERVICE.baseUrl, id:req.params.id});

  request(options, function(error, response, body) {

    if(error) {
      return error;
    }

    return res.send(response.body);

  });
}


module.exports = router;

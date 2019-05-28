(function (){
  'use strict';

  const _ = require('lodash');

  module.exports = {
    customerService: {
      baseUrl:"http://localhost:3004/api/",
      listCustomers:
        {
          uri: "<%= baseUrl %>customer",
          method: 'GET'
        },
      getSingleCustomer:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>"),
          method: 'GET',
          json:true
        },
      createCustomer:
        {
          uri: _.template("<%= baseUrl %>customer"),
          method: 'POST',
          json:true

        },
      updateCustomer:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>"),
          method: 'PUT',
          json:true
        },
      addAddress:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>/addAddress"),
          method: 'POST',
          json:true
        },
      removeAddress:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>/%addressId%"),
          method: 'DELETE',
          json:true
        },
      addContact:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>/addContact"),
          method: 'POST',
          json:true
        },
      removeContact:
        {
          uri: _.template("<%= baseUrl %>customer/<%= id %>/%contactId%"),
          method: 'DELETE',
          json:true
        },

    },
    usersService: {
      baseUrl:"http://localhost:3001/api/",
      login:
        {
          uri: _.template("<%= baseUrl %>login"),
          json:true,
          method: 'POST'
        },
      register:
        {
          uri: _.template("<%= baseUrl %>register"),
          json:true,
          method: 'POST'
        },
      token:
        {
          uri: _.template("<%= baseUrl %>token"),
          json:true,
          method: 'POST'
        }
    },
    catalogueService: {
      baseUrl:"http://localhost:3002/api/",
      listItems:
        {
          uri: _.template("<%= baseUrl %>products"),
          method: 'GET'
        },
      addProduct:
        {
          uri: _.template("<%= baseUrl %>products"),
          method: 'POST'
        },
      deleteProduct:
        {
          uri: _.template("<%= baseUrl %>products/<%= id %>"),
          method: 'DELETE'
        },
      updateProduct:
        {
          uri:_.template("<%= baseUrl %>products/<%= id %>"),
          method: 'PUT'
        }
    },
    cartService: {
      baseUrl:"http://localhost:3003/api/",
      listCart:
        {
          uri: _.template("<%= baseUrl %>cart/<%= id %>"),
          method: 'GET',
          json:true
        },
      userCart:
        {
          uri: _.template("<%= baseUrl %>cart/user/<%= id %>"),
          method: 'GET',
          json:true
        },
      createCart:    {
        uri: _.template("<%= baseUrl %>cart"),
        method: 'POST',
        json:true
      },
      combineCarts:    {
        uri: _.template("<%= baseUrl %>cart/<%= id %>/combine/<%= userId %>"),
        method: 'GET',
        json:true
      },
      addCartItem:    {
        uri: _.template("<%= baseUrl %>cart/<%= id %>/addItem"),
        method: 'PUT',
        json:true
      },
      removeCartItem:    {
        uri: _.template("<%= baseUrl %>cart/<%= id %>/removeItem"),
        method: 'PUT',
        json:true
      }
    }
  };
}());


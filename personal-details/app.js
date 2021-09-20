'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const customers = [
  {
      id: 1,
      firstName: 'Mohini',
      lastName: 'Gonawala'
  }
];

// App
const app = express();
app.get('/personalDetails/:id', (req, res) => {
  let {id} = req.params;
  let filtered = customers.filter(customer => customer.id == id).map( customer =>{
    return {firstName: customer.firstName,
    lastName: customer.lastName
    }});
  return res.send(filtered[0]);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
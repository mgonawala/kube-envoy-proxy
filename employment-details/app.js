'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const customers = [
  {
      id: 1,
      profession: 'Software Engineer',
      salary: 999
  }
];

// App
const app = express();
app.get('/employmentDetails/:id', (req, res) => {
  let {id} = req.params;
  let filtered = customers.filter(customer => customer.id == id).map( customer =>{
    return {profession: customer.profession,
    salary: customer.salary
    }
  });
  return res.send(filtered[0]);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
import fetch from 'node-fetch'
import express from 'express'


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/customers/:id', async (req, res) => {
  let {id} = req.params;

  // Get personal details of customer 
  const personalDetailsHost = process.env.PERSONAL_DETAILS_SERVICE_HOST
    const personalDetailsPort = process.env.PERSONAL_DETAILS_SERVICE_PORT
    let personalDetails = await fetch(`http://${personalDetailsHost}:${personalDetailsPort}/personalDetails/${id}`)
    let pd = await personalDetails.json();
  console.log(pd);
    // Get Employment details of customer 
  const employmentDetailsHost = process.env.EMPLOYMENT_DETAILS_SERVICE_HOST
  const employmentDetailsPort = process.env.EMPLOYMENT_DETAILS_SERVICE_PORT
  const message = await fetch(`http://${employmentDetailsHost}:${employmentDetailsPort}/employmentDetails/${id}`)
    const employmentDetails = await message.json();
    console.log(employmentDetails);
    const response = {...pd, ...employmentDetails};

  res.send(response);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
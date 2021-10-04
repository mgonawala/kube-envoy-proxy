import fetch from "node-fetch";
import express from "express";

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/customers/:id", async (req, res) => {
  let { id } = req.params;

  let personalDetails = await fetch(
    `http://localhost:10000/personalDetails/${id}`
  );
  let pd = await personalDetails.json();

  const message = await fetch(`http://localhost:10000/employmentDetails/${id}`);
  const employmentDetails = await message.json();
  console.log(employmentDetails);
  const response = { ...pd, ...employmentDetails };

  res.send(response);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

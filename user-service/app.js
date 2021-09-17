import fetch from 'node-fetch'
import express from 'express'

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/user', async (req, res) => {
    const message_host = process.env.ENVOY_MESSAGE_PROXY_SERVICE_HOST
    const message_port = process.env.ENVOY_MESSAGE_PROXY_SERVICE_PORT
    const message = await fetch(`http://${message_host}:${message_port}/message`)
    const m = await message.text();
    console.log(`message returned from service ${m}`)
    res.send('Hello '+  m);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
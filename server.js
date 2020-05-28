if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const axios = require('axios')
const path = require('path');
const app = express();

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});
// END DEMO

app.get('/api/playerdata/:playerName', async (request, response) => {
  let uri = `https://api.fortnitetracker.com/v1/powerrankings/global/global/${request.params.playerName}`
  // let res = encodeURI(uri);
  let {data} = await axios({
          url: uri,
          method: 'get',
          headers: {'TRN-Api-Key': process.env.API_KEY}
      })
      response.send(data)
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});

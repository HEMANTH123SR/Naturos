const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello from the server side',
    app: 'Naturos',
  });
});

app.post('/', (req, res) => {
  res.send('You can post to the this end point');
});

app.listen(port, () => {
  console.log(`server started listening at port number ${port} `);
});

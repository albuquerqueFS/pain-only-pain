const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/HEYYYOOOO'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/HEYYYOOOO/index.html');
});

app.listen(PORT, () => {
  console.log('Server running at port: ' + PORT);
});

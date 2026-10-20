const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  // Vuelve a ser vulnerable...
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
});

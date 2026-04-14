const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  // ❌ VULNERABILIDAD XSS: input del usuario va directo a HTML sin escapar
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
});

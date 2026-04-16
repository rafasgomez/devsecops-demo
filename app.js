const express = require('express');
const axios = require('axios');   // ← nueva importación
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}!</h1>`);
});

// Nueva ruta que usa axios (para que la dependencia se ejecute)
app.get('/fetch', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.json({ status: 'ok', data: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
  console.log(`   → Prueba XSS: http://localhost:3000/?name=<script>alert(1)</script>`);
  console.log(`   → Prueba axios: http://localhost:3000/fetch`);
});
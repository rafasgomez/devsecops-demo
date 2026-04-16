const express = require('express');
const app = express();
const port = 3000;

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  // ✅ Corregido: sanitizamos la entrada
  res.send(`<h1>Hello, ${escapeHtml(name)}!</h1>`);
});

app.listen(port, () => {
  console.log(`🚀 App listening on http://localhost:${port}`);
});

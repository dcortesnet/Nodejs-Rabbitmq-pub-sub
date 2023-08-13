const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(` 😀 server on port ${PORT}  `);
});

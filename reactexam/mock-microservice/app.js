const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8008;

app.use(cors());

app.get('/numbers', (req, res) => {
  const response = {
    numbers: [1, 2, 3, 4, 5]
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Mock microservice is running on port ${PORT}`);
});

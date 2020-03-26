const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const calculate = require('./functions/calculate');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.post('/equal', (req, res) => {
  res.json({
    success: true,
    value: calculate.equal(req.body.numbers, req.body.operations),
  });
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

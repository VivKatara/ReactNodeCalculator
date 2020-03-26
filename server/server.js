const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    value: 4, //This is the change that needs to be made, we need to
    //calculate actual value that must be returned from req.body.numbers and req.body.operations
  });
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});

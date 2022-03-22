const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World, from express');
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
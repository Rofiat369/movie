const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import fetch from 'node-fetch';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17')
    .then(res => console.log(res))

    // res.send('Hello World, from express');
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
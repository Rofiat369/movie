const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios =require('axios');

const app = express();
const port = 5000;

const handleError = function (res, error){
    if(error.response){
        res.status(error.response.status).send(error.response.data)
    } else {
        res.status(400).send(error.message)
    }
}

app.get('/', (req, res) => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17')
    .then(function ({data}) {
        // handle success
        res.send(data);
    })
    .catch(function (error){
        handleError(res, error)
    })
})

app.get('/liked', (req, res) => {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d0f5f2e135336200362af8a1a73acb17')
    .then(function ({data}) {
        // handle success
        res.send(data);
    })
    .catch(function (error){
        handleError(res, error)
    })
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
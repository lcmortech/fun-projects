const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); //html file
app.use(express.static(__dirname + '/public')); //js, css, images

const server = app.listen(3000);
app.get('/', (req, res)=>{
    res.sendFile('index.html');
});
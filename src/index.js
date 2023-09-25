const express = require('express');
const app = express()
const homeRouter = require('./routes/home.router')

//set public folder
app.use(express.static('public'))


app.use('/',homeRouter);

app.listen(process.env.port || 3000);
const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorHandler');
const port = process.env.PORT || 4000;
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(errorHandler);


app.listen(port, () => console.log(`Server started on port ${port}`));

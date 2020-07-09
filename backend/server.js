const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors')


const transactions = require('./routes/transactions');
const connectDB = require('./dbConfig/db');


connectDB();

const app = express()

app.use(express.json())

app.use(cors());


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions',transactions);

app.get('/',(req,res)=> {
    res.send('server is up and running')
} )

app.listen(PORT,()=>{
    console.log(`server up and running on port : ${PORT}`.red.bold)
})
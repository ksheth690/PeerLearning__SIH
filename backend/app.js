const express = require('express');
const app = express();
app.use(express.json());
require('./controllers/db')
const userRouter= require('./routes/user');
const { json } = require('body-parser');

//environment variables control
require('dotenv').config();
const port=process.env.PORT || 8081


app.use('/',userRouter);

//server listening
app.listen(port,()=>{
    console.log('listening on Port', port);
}
)
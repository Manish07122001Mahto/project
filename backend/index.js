const express = require('express');
require('dotenv').config();
const {connection}=  require('./config/db')
const port = process.env.port;
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,async()=>{
   try {
    await connection;
    console.log(`Connected to db`);
   } catch (error) {
    console.log(error);
    
   }
   console.log(`Server is running on port ${port}`);
})
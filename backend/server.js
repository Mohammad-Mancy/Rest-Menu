require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

// DB Connection
mongoose.connect(process.env.DB_CONNECT,
    () =>{
        console.log('Connected Successfully')
    }
);

const app = express()
app.use(cors());
app.use(express.json());

app.post('/api/add', (req, res)=>
{
    res.status(200).send('test')
});

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' +process.env.PORT)
})
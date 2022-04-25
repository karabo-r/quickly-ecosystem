const express = require('express')

const app = express()

const PORT = 2000

app.get('/', (req, res)=>{
    console.log('at home');
})


app.listen(PORT, ()=>{
    console.log('listening');
})
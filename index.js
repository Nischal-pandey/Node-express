const express = require('express')
const app = express()   //using express frame work

app.listen(5000, ()=>{
    console.log('successfully Connected on port 5000.')    
})

app.get('/', (req, res)=>{
    res.send("we are good ")
    
})

app.get('/about',(req, res)=>{
    res.send("<h1>nice work</h1>")
})

/* app.get('/about/user',(req, res)=>{    //user is sub route of about
    res.send("<h1>gallery page</h1>")
})*/

app.get('/user/:userid/book/:bookid',(req, res)=>{
    res.send(req.params)
})

app.get('/search',(req, res)=>{ // using query ?
    const name = req.query.name
    const age = req.query.age
    res.send(`Search results for name : ${name}, age : ${age}`)
    //res.send(req.query)
})
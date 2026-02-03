const express = require('express')
const app = express()   //using express frame work

app.listen(5000, ()=>{
    console.log('successfully Connected on port 5000.')    
})

app.set('view engine','ejs')

app.get('/', (req, res)=>{
    const user = [
        {id:1,name:'Nischal'},
        {id:2,name:'ajay'}
    ]
    res.json(user)
    
})

 // ==>  RESOPNSE METHODS TOPIC 

app.get('/about',(req, res)=>{   // ---REDIRECT RESOPNSE-----
    res.redirect('/user')
})

app.get('/user',(req, res)=>{    // ABOUT TO REDIRECT USER ----
    res.send("<h1>user page </h1>")
})

app.get('/link',(req, res)=>{
    res.redirect(301,'https://www.google.com/')
})

app.get('/userone',(req, res)=>{
    res.render('userone')
})


app.get('/download',(req, res)=>{  // 1- DOWNLOAD METHOD   
   // res.download('/file or path name')
})

app.get('/download',(req, res)=>{  // 2- DOWNLOAD METHOD   
//    res.sendFile(__dirname + '/files name')
})

app.get('/end',(req, res)=>{   // END METHOD
  res.write('this id testing')
  res.end()
})

app.get('/error',(req, res)=>{  // server status
   res.sendStatus(503)
})

app.get('/fewerror',(req, res)=>{ 
    res.status(200).send("Hello")

})

app.get('/check',(req, res)=>{  // response HEADER
    console.log(res.headersSent);
    res.send("bye bye ")
    console.log(res.headersSent);
    
})

app.get('/chat',(req, res)=>{
    res.set('custom-header','hello123')
    console.log(res.get('custom-header'));
    res.send("header set")
    
})


// COMPLETED <==========================


const express = require('express')
const app = express()   //using express frame work

app.listen(5000, ()=>{
    console.log('successfully Connected on port 5000.')    
})

app.set('view engine','ejs')

app.use(express.json())

app.use(express.urlencoded({extended:false})) // Middleware

//=========> REQUEST METHOD <============

// app.get('/abot', (req, res)=>{     //===> ACCEPTS METHOD
//     if(req.accepts('html')){
//         res.send("<h1>Hello Html</h1>")
//     }else if(req.accepts('json')){
//         res.send({message : 'Hello Json'})
//     }else if (req.accepts('xml')){
//         res.send("<message>Hello Xml</message>")
//     }else{
//         res.send("Content type not supported")
//     }
// })

app.post('/about',(req, res)=>{  //============> REQUEST IS METHOD
    if(req.is('application/json')){
    res.send("Valid Json Data")
    }else if(req.is('text/html')){
    res.send("HTML Data")
    }else{
        res.status(400).send("unsupported Content-Type.")
    }
})


/*============> Important Method COMPLETED
         QUERY
         PARAMS
         BODY


 */
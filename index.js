 //===========> USING EJS TEMPLATE RENDER METHOD DATA IN TABLR FORM
import express from 'express'
const app= express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    res.send("Home page")
})

app.get('/about',(req, res)=>{
   var users = [
	{name:"Salman Khan",age:22,city:"Delhi"},
	{name:"John Abrahm",age:24,city:"Mumbai"},
	{name:"John Doe",age:29,city:"Goa"},
	{name:"Sharukh Khan",age:55,city:"Delhi"},
	{name:"Amitab Bachhan",age:75,city:"Agra"},
	{name:"Sunny leone",age:44,city:"Gujrat"}

];

    res.render("about",{
                        title:'Home page',
                         message:"hello message ",
                         items : users
                        })
})

app.get('/form',(req, res) =>{
 res.render('form',  {message: null} )
})
app.post('/submit',(req, res) =>{
 const name = req.body.myname

 const message = `Hello, ${name} you submitted the form`
 res.render('form', {message: message})
})


app.listen(5000,()=>{
    console.log('server started successfully ');
    
})
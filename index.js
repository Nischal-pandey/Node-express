 //===========> USING EJS TEMPLATE RENDER METHOD DATA IN TABLR FORM
import express from 'express'
const app= express()

app.set('view engine','ejs')

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
app.listen(5000,()=>{
    console.log('server started successfully ');
    
})
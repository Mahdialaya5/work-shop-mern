const express=require("express")  
const app=express()
require("dotenv").config()
const port=process.env.PORT
const connectdb=require("./config/connectDB")
const RoutesUser=require('./Routes/RoutesUser')
const RoutesProduct=require('./Routes/RoutesProduct')
const cors = require("cors");
var cookieParser = require('cookie-parser')

const corsOptions = {
   origin: 'https://front-9hfmdimtl-mahdialaya5s-projects.vercel.app', 
   methods: ['GET', 'POST', 'PUT', 'DELETE'], 
   allowedHeaders: ['Content-Type', 'Authorization'], 
   credentials: true, 
 };
 
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

connectdb()
app.use(cookieParser())
app.use(express.json())
app.use("/uploads",express.static(__dirname+"/uploads"))

//Routes
app.use('/api/user',RoutesUser)
app.use('/api/product',RoutesProduct)

/*app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './client/build/index.html'));
 }); ki ibda mern kamil */
 
app.use(function(req, res, ){
   res.status(404).send('not found!')})

app.listen(port,(err)=>{
    err ? console.log(err):
    console.log("server is running");
})
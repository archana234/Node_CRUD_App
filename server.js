// Importing expressJS

// EXpress JS for creating server and api get,post,put and delete
const express = require('express')
// Body Parsers for getting the data through the urls
const bodyParser = require('body-parser')

//const {request} = require('express')

// Importing Mongo client
const MongoClient = require('mongodb').MongoClient

// Const app controls the entire app with express functional constructor
const app = express()


// We are saying expressjs that to use body parser urlencoded to be true
app.use(bodyParser.urlencoded({extended:true}))



// Database Connection String
const connectionString = "mongodb+srv://ARCHANA:Nikitha@cluster0.nie0w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// Connecting the database
MongoClient.connect(connectionString,(err,client)=>{
    if(err){
        return console.error(err)
    }
    console.log('connected to the database')

})

// Create Route with Creating the quote
app.post('/quotes',(req,res)=>{
    res.send(req.body)
})


// Inbuilt function of express server
app.get('/',(req,res) =>{
    //res.send("hello world!")
    res.sendFile(_index.html)

})

const PORT = 3000

app.listen(PORT,() =>{
    console.log(`server running at port ${PORT}`)
})
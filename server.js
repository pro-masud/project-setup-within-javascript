import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// init dotenv 
dotenv.config();

// init express js
const app = express();

// envarment PORT Number Here
const PORT = process.env.PORT;



// init support all

app.use(express.json());
app.use(express.urlencoded({extended : false}));


// create a public static folder use to font-end

// app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.json({"name" : "masud rana", "age": 30, "job": "PHP Developer"});
});


app.post("/", (req, res) => {
    console.log(res.body);
});


app.get("/getdata/:name", (req, res) => {
    console.log(req.params);
    res.send("<h1>Okkay Data </h1>");
});


// create a server 
app.listen( PORT, () => {
    console.log(`Server is Running Port Number: ${PORT}`.bgGreen.black);
});
const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require('./models/userModel')

const dotenv = require("dotenv");
dotenv.config(); // Load environment variables

const app = express()
app.use(express.json())
app.use(cors())


// Connect to MongoDB using .env variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.log("❌ MongoDB connection error:", err));



app.post("/login", (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record exist")
        }
    })
})


app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(userModel => res.json(userModel))
    .catch(err => res.json(err))

})

app.listen(3001, ()=>{
    console.log("server is running");
})
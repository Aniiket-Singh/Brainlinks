import express from "express"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"


mongoose.connect("mongodb+srv://aniketsingh2151:WoHozp69WVCRZffn@cluster0.f8dop.mongodb.net/")
import { userModel } from "./db"


const app = express();
app.use(express.json())

app.post("/api/v1/signup", async (req,res) => {
    const username = req.body.username
    const password = req.body.password

    await userModel.create({
        username,
        password
    })

    res.json("User Signed up")
})

app.get("/api/v1/signin", (req,res) => {

})

app.get("/api/v1/signin", (req,res) => {

})

app.get("/api/v1/signin", (req,res) => {

})

app.get("/api/v1/signin", (req,res) => {

})

app.get("/api/v1/signin", (req,res) => {

})

app.listen(3000);
const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.port || 9200

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/",cors(),async(req,res)=>{
    res.send("This app is working")
})

app.post("/post_name",async(req,res)=>{
    let {name} = req.body
    console.log(name)
})

app.get("/home",cors(),async(req,res)=>{
    res.send("This is the data for the homepage")
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})
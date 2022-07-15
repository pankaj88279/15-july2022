

console.log("its okk")  

const express = require('express')
const app = express()

app.get('/a', function (req, res) {
  res.send('hello world')
})
app.get('/a',function(req,res){ 
res.send("hello world A")
} )

app.get('/b',function (req,res){
    res.send("hello world B")
})


app.listen(6000)
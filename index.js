const express = require("express")
var app = express()
app.get("/",function(request,response){
    const email="edemacharles877@gmail.com"
response.send("hello my email is " +email)
})
app.listen(10000, function () {
    
console.log("Started application on port %d", 10000)
});
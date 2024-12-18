const express = require("express");
const app = express();

app.use("/", (req,res)=>{
res.sendFile("/index1.html",{root: __dirname});
});

app.listen(5000, console.log("server is listening on port 5000"));


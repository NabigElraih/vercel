const express = require("express");
const app = express();

app.use("/", (req,res)=>{
res.send("
hello World, Nabig");
});

app.listen(5000, console.log("server is listening on port 5000"));


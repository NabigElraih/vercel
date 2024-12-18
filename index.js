const express = require("express");
const app = express();

app.use("/", (req,res)=>{
res.send("Hello world this is Express server and it is running");
});

app.listen(5000, console.log("server is listening on port 5000"));


const express = require("express");
const app = express();

app.use("/", (req,res)=>{
res.send('
         <h1>Hello World this Nabig from JS app test1</>
');
});

app.listen(5000, console.log("server is listening on port 5000"));


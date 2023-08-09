const express = require("express");
const api = require("./api.js");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"./public")));
app.get("/api/test/",(req,res)=>{res.send("test complete")})
app.listen(8008, "0.0.0.0");
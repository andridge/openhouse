const express = require('express')
const app = express()
const port = 1111
const route = require('./routes/routes');
var bodyParser = require('body-parser');
app.set("view engine", "ejs")
//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
//const leaflet = require('leaflet')
app.use("/api_v1",route(express));

app.get("/administrator",(req,res)=>{
  res.render("main");
});
app.get("/",(req,res)=>{
  res.render("OpenHouse");
});
app.listen(port, () => {
  console.log(`OPENHOUSE STARTED AT ${port}`)
})
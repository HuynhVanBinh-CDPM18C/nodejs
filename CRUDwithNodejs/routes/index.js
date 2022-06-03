var express = require('express');
var router = express.Router();
var dbConnect = require("../database/connect");

/* GET home page. */
router.get('/', function(req, res, next) {
  dbConnect.query("SELECT * FROM student", function(err, data){
    if(err) throw err;
    res.render("index", {data: data});
  })
});

//them hoc sinh moi
router.get("/add", function(req, res){
  res.render("add");
});
router.post("/add", function(req, res){
  dbConnect.query(`INSERT INTO student (name, email, class) VALUES('${req.body.name}','${req.body.email}','${req.body.class}')`,function(err){
    if(err) throw err;
    res.redirect("/")
  })
});

module.exports = router;

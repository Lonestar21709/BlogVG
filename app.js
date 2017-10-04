var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSantizier = require("express-sanitizer"),
    Blog = require("./models/blogs.js");
    

mongoose.connect("mongodb://localhost/vgb", {useMnogoClient: true});
app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSantizier());

// RESTful Routing Pattern

//INDEX
app.get("/", function(res, req){
    res.redirect("home");
});

app.get("/blogs", function(req, res){
    res.render("home");
})

//NEW

//CREATE

//SHOW

// EDIT

// UPDATE

// DESTROY

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SUPER GREEN");
});
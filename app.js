//requiring express,bodyParser etc to use in the code 
const express = require("express");
const bodyParser = require("body-parser");

const date=require(__dirname+"/date.js");

const app = express();

let items = ["buy food", "cook food", "eat food"];
let workItems = [];

//code snippet to use ejs
app.set('view engine', 'ejs');//use it after const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    let day=date.getDay(); //use getDate to print full date

    //see ejs documentation
    //instantiating the ejs template to use 
    res.render("List", {
        listTitle: day, newListItems: items//sending current day to the template 
    });
});
app.post("/", function (req, res) {
    let item = req.body.newItem;

    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("List", { listTitle: "Work List", newListItems: workItems })
});

app.get("/about",function(req,res){
    res.render("about");
});



app.listen(3000, function () {
    console.log("server started on port 3000");
});
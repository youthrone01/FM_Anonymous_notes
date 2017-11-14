
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var session = require('express-session');
app.listen(8000, function() {
 console.log("listening on port 8000");
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret: 'codingdojorocks'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './public/dist')));

var NoteSchema = new mongoose.Schema({
    content:{type:String, minlength:3},
},{timestamps:true});


mongoose.model("Note",NoteSchema);
var Note = mongoose.model('Note');

app.post('/notes', function(req,res){
    var newnote = new Note({content: req.body.content});
    newnote.save(function(err){
        if(err){
            console.log('Note can not be added!!');
        }else{
            res.send("success");
        }
    })
})

app.get('/notes', function(req, res){
    Note.find({}).sort({createdAt: 'desc'}).exec(function(err, notes){
        if(err){
            console.log('can not get notes!!');
        }else{
            res.json(notes);
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});
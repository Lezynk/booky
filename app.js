//main app controller for Notepad

//call to external libraries
var express         = require('express'),
    app             = express();

//view engine (ejs) & public directory
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

//GET - Landing route
app.get('/', function(req, res){
    res.render("landing");
});

//server launch
app.listen(process.env.PORT, function(){
    console.log('Serveur en route!');
});
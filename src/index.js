//MAIN SERVER FILE
var express   = require('express'),
    app       = express(),
    exphbs    = require('express-handlebars'),
    fs        = require('fs'),
    bodyParser = require('body-parser');

///SET VIEW ENGINE
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/',
  layoutsDir: __dirname + '/views/layouts',
  extname: '.hbs'
}))

app.set('view engine', 'hbs'); // Turn it on
app.set('views', __dirname + '/views'); //SET VIEWS dirrctory, which is not an hbs config. 

app.use(bodyParser.json())// supports encoded bodies
app.use(bodyParser.urlencoded({extended: true})) //supports encoded

app.use(express.static(__dirname + '/public')); //Tell express where to find static pages

//////////////////////////
////==Connect database
require('./config/db');
///////////////////

var server = app.listen(3000, function() {
  console.log( "Server listening at: " + server.address().port);
});


//Mount middleware
app.use('/things/?', require('./controllers/things'));



//Def ABout

  app.route('/home/?')
  .get(function(req, res, next) {
    res.render('home', {
      pageTitle: 'Homepage'
    });
  })


//Define homepage
app.route('/?')
  .get(function(req, res, next) {
        res.render('home', {
          pageTitle: 'Homepage'
        });
  })
  .post(function(req, res, next) {
  //res.send(req.body.name + ", your age is ~" + (2016 - parseInt(req.body.birthyear)));
    //res.send("received");
  //res.redirect('/welcome');
  res.render('home', {nameDisplay: (req.body.name)});

})


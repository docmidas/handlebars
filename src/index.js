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

var server = app.listen(3000, function() {
  console.log( "Server listening at: " + server.address().port);
});


//Define todos route
// app.route('/ppl/:id/?')
//   .get(function(req, res, next) {
//     var id = parseInt(req.params.id);
//       ppl = fs.readFileSync(__dirname + '/db/people.json');
//       console.log(id);

//     ppl = JSON.parse(ppl.toString());
//     res.render('detail', {
//       pageTitle: ppl[id].name,
//       ppl: ppl[id]
//     });
//   })
//Mount middleware
app.use('/ppl/?', require('./controllers/ppl'));
app.use('/users/?', require('./controllers/users'));
app.use('/board_games/?', require('./controllers/board_games'));


//Def ABout
app.route('/about/?')
  .get(function(req, res, next) {
    res.render('about', {
      pageTitle: 'About'
    });
  })

  app.route('/home/?')
  .get(function(req, res, next) {
    res.render('home', {
      pageTitle: 'Home'
    });
  })

//Def FULL LISTING with 5 properties
app.route('/full/?')
  .get(function(req, res, next) {
    var ppl = fs.readFileSync(__dirname + '/db/people.json');  


    res.render('full', {
      pageTitle: 'Full List',
      ppl: JSON.parse(ppl.toString())
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


//Req dependencies
var express    = require('express'),
    app         = express(),
    Users      = express.Router(),
    fs         = require('fs'),
    bodyParser = require('body-parser');

app.use(bodyParser.json())// supports encoded bodies
app.use(bodyParser.urlencoded({extended: true})) //supports encoded

  
Users.route('/balances/?')
  .get(function(req, res, next) {
    ppl = fs.readFileSync(__dirname + '/../db/people.json');
    ppl = JSON.parse(ppl.toString());
    res.render('usersBal', {
      pageTitle: "Balance",      
      ppl: ppl
    });
  })

  Users.route('/?')
  .get(function(req, res, next) {    
    res.render('users', {
      pageTitle: 'Users'
    });
  })
  .post(function(req, res, next) {
    res.send('Got your form!');
    console.log(req.body);
  })


 
module.exports = Users;

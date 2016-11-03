//Req dependencies
var express    = require('express'),
    Ppl      = express.Router(),
    fs         = require('fs');


  

  Ppl.route('/places/?')
  .get(function(req, res, next) {
    var id = parseInt(req.params.id);
      ppl = fs.readFileSync(__dirname + '/../db/people.json');
      console.log(id);

    ppl = JSON.parse(ppl.toString());
    res.render('places', {
      pageTitle: "Places",
      
      ppl: ppl
    });
  })

  Ppl.route('/:id/?')
  .get(function(req, res, next) {
    var id = parseInt(req.params.id);
      ppl = fs.readFileSync(__dirname + '/../db/people.json');
      console.log(id);

    ppl = JSON.parse(ppl.toString());
    res.render('detail', {
      pageTitle: ppl[id].name,
      ppl: ppl[id]
    });
  })



module.exports = Ppl;

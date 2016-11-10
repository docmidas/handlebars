//Req dependencies
var express    = require('express'),
    Things      = express.Router(),
    fs         = require('fs');  

  Things.route('/board_games/?')
  .get(function(req, res, next) {
    //var id = parseInt(req.params.id);
       var bgames = fs.readFileSync(__dirname + '/../db/board_games.json');
       //console.log(__dirname);
      //console.log(id);

    bgames = JSON.parse(bgames.toString());
    res.render('board_games', {
      pageTitle: "Board Games",
      
      bgames: bgames
    });
  })
 

module.exports = Things;

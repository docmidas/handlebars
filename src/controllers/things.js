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

  Things.route('/video_games/?')
  .get(function(req, res, next) {
    //var id = parseInt(req.params.id);
       var vgames = fs.readFileSync(__dirname + '/../db/video_games.json');
       //console.log(__dirname);
      //console.log(id);

    vgames = JSON.parse(vgames.toString());
    res.render('video_games', {
      pageTitle: "Video Games",
      
      vgames: vgames
    });
  })

  Things.route('/coding/?')
  .get(function(req, res, next) {
    //var id = parseInt(req.params.id);
       var codes = fs.readFileSync(__dirname + '/../db/codes.json');
       //console.log(__dirname);
      //console.log(id);

    codes = JSON.parse(codes.toString());
    res.render('coding', {
      pageTitle: "Coding",
      
      codes: codes
    });
  })
 

module.exports = Things;

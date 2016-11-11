var express   = require('express'),
    Things  = express.Router(),
    fs        = require('fs'),
    mongoose  = require('mongoose'),
    Thing   = require('../models/thing');
//////////////////////
////////////ROUTES
/////membersonly/Things/:id
 // Things.route('/:id/?')
 //  .get(function(req, res, next) {
 //    res.json({
 //        message: "you asked for " + req.params.id});
 //  })
 //  .delete(function(req, res, next) {
 //    var id = req.params.id;
 //    Thing.findByIdAndRemove(id, function(err, thing) {
 //        res.json({message: "Deleted entry at " + req.params.id});
 //      });
 //  });
/////////////////////////////Route: root/things/video_games
Things.route('/video_games/?')
  .get(function(req, res) {
    console.log(req);
    Thing.find({category: "video_game"}, function(err, things) { //Find ALL gifts within database
       console.log(things);
      res.render('video_games', {vgames: things});
      //res.json(things);
    });
  })
  ///////////
  /////////////////////////////Route: root/things/board_games
Things.route('/board_games/?')
  .get(function(req, res) {
    console.log(req);
    Thing.find({category: "board_game"}, function(err, things) { //Find ALL gifts within database
       console.log(things);
      res.render('board_games', {bgames: things});
      //res.json(things);
    });
  })
  ///////////
  /////////////////////////////Route: root/things/coding
Things.route('/coding/?')
  .get(function(req, res) {
    console.log(req);
    Thing.find({category: "code"}, function(err, things) { //Find ALL gifts within database
       console.log(things);
      res.render('coding', {codes: things});
      //res.json(things);
    });
  })
  ///////////
  /////////////////////////////Route: root/things/other
Things.route('/other/?')
  .get(function(req, res) {
    console.log(req);
    Thing.find({category: "other"}, function(err, things) { //Find ALL gifts within database
       console.log(things);
      res.render('other', {others: things});
      //res.json(things);
    });
  })
  ///////////
/////root/things/?
  Things.route('/?')
  .get(function(req, res) {
    console.log(req);
    Thing.find(function(err, things) { //Find ALL things within database
       console.log(things);
      res.render('things', {things: things});

      //res.json(things);
    });
  })
  ///////FOR ADDING THINGS
  .post(function(req, res) {
    Thing.create( {
      name: req.body.itemname,
      category: req.body.category,
      picture: req.body.picture,
      link: req.body.link,
      about: req.body.about
    }, function(err, things) {


      Thing.find(function(err, things) { //Find ALL things within database
       console.log(things);
      res.render('things', {things: things});})

      //res.redirect('/things');
      //res.json(things);
    });
  })

  // .patch(function(req, res) {
  //    ///////FOR LOADING TEST ENTRIES 
  //  var testGifts = [{                    
  //                   name: "Time Ninja",
  //                   category: "code",
  //                   picture: "https://static1.squarespace.com/static/57c0a3786a4963c16852850d/57c0bdd359cc68dae81a7576/57c0bddf9f745643296f09fb/1472438750034/NinjaRun.png?format=1000w",
  //                   link: "http://docmidas.github.io/project1/",
  //                   about: "In this endless running game, help Nia Ninja reclaim her clan's lost treasure. Just don't let Jay-the-Jet hit you with his energy blasts."                  
  //                 },
  //                 {                    
  //                   name: "Killer Queen",
  //                   category: "video_game",
  //                   picture: "http://technical.ly/brooklyn/wp-content/uploads/sites/4/2014/05/kickstarter-killerqueen.jpg",
  //                   link: "http://technical.ly/brooklyn/wp-content/uploads/sites/4/2014/05/kickstarter-killerqueen.jpg",
  //                   about: "Killer Queen is a real-time strategy platform video game developed by Josh DeBonis and Nikita Mikros. The video game is based on a physical game created by the same people"                  
  //                 }
  //               ];
  //   Thing.create(testGifts, function(err, gifts) {
  //     //console.log(gifts);
  //     //res.json(gifts);
  //   });
  // });  
  /////////END OF TESTING POST METHOD

module.exports = Things;

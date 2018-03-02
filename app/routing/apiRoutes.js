// ===============================================================================
// LOAD DATA: Link our routes to "data" sources.
// The data source holds arrays of information on friends.
// ===============================================================================
var friends = require("../data/friends"); //should this be survey?
//var waitListData = require("../data/waitinglistData");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {

  //Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
     var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };
      console.log(req.body);
      //Take results of the user's survey POST and parse it
      var userData = req.body;
      var userScores = userData.scores;
      //this var will calculate the difference between the user's scores
      // and the scores of each user in the database.
      var totalDifference = 0;
      //loop through all the friends in the database.
      for (var i = 0; i < friends.length; i++) {
       console.log(friends[i]);
       totalDifference = 0;
       //Then loop through all the scores of each friend
       for(var j = 0; j < friends[i].scores[j]; j++) {
        
        //Calculate the difference between the scores and sum them into the totalDifference.
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        
        //if the sum of the difference is less than the difference of the current "best match"
        if(totalDifference <=bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
       }
     }
  // API POST Requests: code handles when a user submits a form and sends data to the server.
  // When a user submits form data (a JSON object), JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the userData array)
  // ---------------------------------------------------------------------------  
    friends.push(userData);
    //return  bestMatch in JSON format back to frontend HTML.
    res.json(bestMatch);
  });
}
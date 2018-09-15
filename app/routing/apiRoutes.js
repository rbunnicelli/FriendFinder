var path = require('path');

//gets list of friends
var friends = require("../data/friend.js");

//export api routes
module.exports = function(app) {
    //api get requests that shows all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //Create new friends
    app.post("/api/friends", function(req, res) {

        var user = req.body;
        console.log(user);
        var scoresArray = [];
        var newUserScore = req.body.scores;
        var bestMatch = 0;

    for(var i=0; i<friends.length; i++) {
        var scoreDiff = 0

        for(var j=0; j<newUserScore.length; j++) {
            scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newUserScore[j])));
        }

        scoresArray.push(scoreDiff);
    }

    for(var i=0; i<scoresArray.length; i++) {
        if(scoresArray[i] <= scoresArray[bestMatch]) {
            bestMatch = i;
            /*matchImage = bestMatch[i].photo;*/
 }
    }

    var bestFriendFound = friends[bestMatch];
    res.json(bestFriendFound);

    friends.push(user);
    res.json({status: 'OK', bestMatch: bestMatch, matchImage: matchImage});
    });
}



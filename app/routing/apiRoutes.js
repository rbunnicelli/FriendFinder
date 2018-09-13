var path = require('path');

//gets list of friends
var friends = require("../data/friend.js");

//export api routes
module.exports = function(app) {
    //api get requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    //Create new friends
    app.post("/api/friends", function(req, res) {

        var user = req.body;
        console.log(user);

        friends.push(user);
        res.json(user);

    });
}



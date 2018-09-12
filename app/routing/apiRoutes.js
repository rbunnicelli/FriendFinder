var path = require('path');

//gets list of friends
var friends = require("../data/friend.js");

//export api routes
module.exports = function(app) {
    //api get requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
}



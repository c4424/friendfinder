// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

module.exports = function(app) {
    app.post("/api/friends", function(req, res) {
        var surveyResults = req.body;
        friends.push(surveyResults);
        res.status(200).json(friends);
    })    
}

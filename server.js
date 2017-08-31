// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Setup the express app
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservations = [];
var waitingList = [];

//routes
app.get("/", function(res, res) {
	res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/view", function(res, res) {
	res.sendFile(path.join(__dirname, "view.html"))
});

app.get("/reserve", function(res, res) {
	res.sendFile(path.join(__dirname, "reserve.html"))
});

// app.get("/api", function(res, res) {
// 	res.json(reservations);
// });

//create new reservation
app.post("/api/new", function(req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
	console.log(newReservation);
	res.json(newReservation);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
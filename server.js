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
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/api/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"))
});

app.get("/api/new2", function(res, res) {
	res.json(reservations);
});

//create new reservation
app.post("/api/new", function(req, res) {
	var newReservation = req.body;
	// console.log(newReservation);
	if (reservations.length < 5) {
		reservations.push(newReservation);
	} else {
		waitingList.push(newReservation);
	}
	console.log("New reservation:\n" + newReservation);
	console.log("==========");
	console.log("Waiting List:\n" + waitingList);
	console.log("==========");
	console.log("Current reservations:\n" + reservations);
	console.log("==========");
	res.json(newReservation);

});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
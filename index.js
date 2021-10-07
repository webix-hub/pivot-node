const express = require("express");
const Datastore = require("nedb");

const app = express();

const db = new Datastore();
const data = require("./data.json");

db.insert(data);

app.get("/", (req, res, next)=>{
	db.find({}).sort({ id:1 }).exec((err, data) => {
		if (err)
			next(err);
		else
			res.send(data);
	});
});

const port = "3000";

app.listen(port, function () {
	console.log("Server is running on port " + port);
});
const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/routes.js");

const car = express();

car.use(express.json());
const port = 4000;

const url = "mongodb://localhost:27017/nodeproject";
car.listen(port, (req, res) => {
    console.log("server established" + port)
})

mongoose.connect(url).then(console.log("db connected successfully")).catch((err) => {
    console.log("error", err);
});
car.use("/car", routes)
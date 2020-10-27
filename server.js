const express = require("express");
const path = require("path");
const ejs = require("ejs");

const routes = require("./routes")

const app = express();
const port = 3000

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile)

app.use(express.static("public"));

app.use('/', routes);

app.listen(port, () => {
    console.log('Server is working .. : in ' + port + " port.");
});
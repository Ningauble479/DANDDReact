var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

var path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
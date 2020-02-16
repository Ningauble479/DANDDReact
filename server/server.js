const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);



app.listen(port, function() {
  console.log("App listening on PORT " + port);
});

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", function (req, res) {
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}
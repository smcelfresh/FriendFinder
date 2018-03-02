// ==============================================================================
// DEPENDENCIES: npm packages to give our server useful functionality
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
// Sets an initial port to tell server where it should listen later in code
var PORT = process.env.PORT || 8080;
// Tells node that we are creating an "express" server
var app = express();

//create application/x-www-form-urlencoded as parser
app.use(bodyParser.urlencoded({extended: true}));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
app.use(bodyParser.text({type: "text/html"}));
// ================================================================================
// ROUTER: Points the server to a series of "route" files. 
// Routes give server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// LISTENER: This code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

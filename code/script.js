//loading local modules
var config = require("../code/config.js");
var numbeo = require("../code/numbeo.js");

//loading node modules
var casper = require('casper').create(config.config);
var fs = require('fs');

//loading file with links
var links = require("../data/urls.json");

var start = Date.now();

casper.start();

//nesting is required in order to share scope
casper.then(function() {
  var output = numbeo.getNumbeoValues(links, number);
  this.then(function() {
    fs.write("./data/data.json", JSON.stringify(output));
  });
});

casper.run(function() {
  this.echo("Done!");
  this.echo("Total seconds elapsed: " + ((Date.now() - start) / 1000));
  casper.exit();
});
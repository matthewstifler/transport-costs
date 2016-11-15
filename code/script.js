var casper = require('casper').create({
  pageSettings: {
    loadImages: true,//The script is much faster when this field is set to false, but it's set to true to prevent memory leaks
    loadPlugins: false,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
  },
  verbose: true,
  waitTimeout: 20000
  //logLevel: "debug"
});
var fs = require('fs');
var links = require("../data/urls.json");
var results = [];
var currIndex = 0;

var start = Date.now();

casper.start();

casper.repeat(links.length, function() {
  casper.open(links[currIndex]).then(function() {
    this.echo(Date.now());
    this.echo(this.getTitle());
    results.push(this.evaluate(function() {
      var priceOne = document.querySelectorAll('td.priceValue')[27].innerText;
      var priceMonth = document.querySelectorAll('td.priceValue')[28].innerText;
      var country = document.querySelectorAll('a.breadcrumb_link')[1].innerText;
      return [priceOne, priceMonth, country];
    }));
  });
  currIndex++;
});

casper.then(function(){
  this.echo("Done!\n");
  fs.write("./data/data.json", JSON.stringify(results));
  this.echo("Total elapsed " + (Date.now() - start));
});

casper.run();
module.exports.getNumbeoValues = function(links, number) {
  var currIndex = 0;
  var results = [];

  casper.repeat(links.length, function() {
    casper.open(links[currIndex]).then(function() {
      this.echo(Date());
      this.echo(this.getTitle());
      results.push(
        this.evaluate(function(number) {
          return document.querySelectorAll('td.priceValue')[number].innerText;
        }, number)
      );
      this.echo(results[currIndex - 1]);
    });
    currIndex++;
  });
  
  return results;
};
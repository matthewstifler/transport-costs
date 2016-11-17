# Overview
This repo contains data and code used for my side-project on comparing public transportation tickets' costs worldwide retrieved from numbeo.com


##Code
Overall, most of the data crunching is done with R, while data retrieval is on JS.  
R code is pretty unique to my case and hardly reusable, while JS code is made so that one can reuse it for one's own purposes. Here is a rundown of how it all works:

1. City names list is extracted from ```./code/data.js``` file, conveniently made by numbeo.com and downloaded by me.
2. R creates url list from the city names and saves it to ```./data/urls.json/```
3. In ```./code/script.js``` module for main function is loaded along with config and links, casper iterates over the links and saves the output to ```./data/data.json```. NOTE: All price values on Numbeo are stored in nodes with selector ```td.priceValue```. To change the script to download the data of your interest you have to find out the row number of it on the numbeo page. To do that, you need to open console on any city numbeo page and run ```$$('td.priceValue') ```, which will give you an array of nodes. You have to find the number of the node you need and put as a second argument in the ```./code/script.js ``` in the ```getNumbeoValues(links, )``` command.
4. Load the file in R and proceed.

##Data
Data for public transportation tickets' costs from numbeo.com in ```./data/transport-costs-numbeo.csv```
The costs are given in USD and are downloaded on 13.11.16.

* City: city name as on numbeo.com

* One.ticket: one-time public transportation ticket cost, USD

* Month.ticket: unlimited ticket for month, USD

* Country: city's country name, as on numbeo.com

* Ratio: Month ticket cost divided by one time ticket cost


const jsdom = require("jsdom");
var path = require("path");
const fs = require('fs');
const cheerio = require('cheerio');

var htmlSource = fs.readFileSync("szablon.html", "utf8");
var replaceValues = {
    "name":"Mateusz",
    "eyes":"blue",
    "mass": 4
};

console.log(htmlSource);

var $ = cheerio.load(htmlSource);

for(var key in replaceValues) {
  console.log(key, replaceValues[key]);
  $('.' + key).html(replaceValues[key]);
}

var loves = 'loves';
// $(`[id=${loves}]`).html('insert my text :)');
$('#loves').html('insert my text :)'); // jw, ale krócej

//now data from replaceValues is injected into divs in htmlSource. we save the html to changedHtml variable
var changedHtml = $.html();
console.log(changedHtml);

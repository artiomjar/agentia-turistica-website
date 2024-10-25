const xml = fetch("https://www.floatrates.com/daily/mdl.xml", {type: "xml"});
xml.then(response => response.text()).then(xmlData => {
var $xmlData = jQuery.parseXML(xmlData);
var eur;
var gbp;
var ron;
var usd;
jQuery($xmlData).find("item").each(function() {
if ($(this).find("targetCurrency").text()==="EUR") {
eur = $(this).find("exchangeRate").text();
}
if ($(this).find("targetCurrency").text()==="GBP") {
gbp = $(this).find("exchangeRate").text();
}
if ($(this).find("targetCurrency").text()==="RON") {
ron = $(this).find("exchangeRate").text();
}
if ($(this).find("targetCurrency").text()==="USD") {
usd = $(this).find("exchangeRate").text();
}
});
jQuery('#eur').text('MDL '+(1/eur).toFixed(8));
jQuery('#gbp').text('MDL '+(1/gbp).toFixed(8));
jQuery('#ron').text('MDL '+(1/ron).toFixed(8));
jQuery('#usd').text('MDL '+(1/usd).toFixed(8));
}).catch((error) => {
jQuery('#eur').text('MDL ?');
jQuery('#gbp').text('MDL ?');
jQuery('#ron').text('MDL ?');
jQuery('#usd').text('MDL ?');
});
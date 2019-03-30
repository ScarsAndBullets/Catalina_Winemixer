//Venues Hardcode
const clientID = "K1WLX4BKHD5EEE2JJADJTQWJYJB52IITFXVXUVULQSPWOHV4";
const clientSecret = "31E2BSQMJPIPOPCR54K2DTNGD0ILZPW5AL5LM42JRCBNWAD0";
const version = "20190326";
var locationParam = "Riverton, UT";
var venueParam = "coffee";
var resultLimit = "5";

var queryURL = `https://api.foursquare.com/v2/venues/search?near=${locationParam}&query=${venueParam}&client_id=${clientID}&client_secret=${clientSecret}&v=${version}&limit=${resultLimit}`;

$("#subbutton").on("click", function() {
	locationParam = $("#zipcode").val();
	console.log(`maps.js locationParam ${locationParam}`);
	ajaxCall();
});

function ajaxCall() {
	$.ajax({
		url: queryURL,
		method: "GET"
	})
		// We store all of the retrieved data inside of an object called "response"
		.then(function(response) {
			console.log(response);
			console.log(response.response.venues[0].name);
		});
}

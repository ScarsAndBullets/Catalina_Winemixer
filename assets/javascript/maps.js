//FourSquare authorization
const clientID = "K1WLX4BKHD5EEE2JJADJTQWJYJB52IITFXVXUVULQSPWOHV4";
const clientSecret = "31E2BSQMJPIPOPCR54K2DTNGD0ILZPW5AL5LM42JRCBNWAD0";
const version = "20190326";

//FourSquare Venue Search variables
var locationParam = "84010";
var venueParam = "coffee";
var resultLimit = "5";

//FourSquare Venue Search URL
var queryURL = `https://api.foursquare.com/v2/venues/search?near=${locationParam}&query=${venueParam}&client_id=${clientID}&client_secret=${clientSecret}&v=${version}&limit=${resultLimit}`;

//FourSquare Venue Return Object
var data;

//FourSquare Photo Search variable
var photoLimit = "1";
var venueID = "4b3b5794f964a520b27225e3";

//FourSquare Photo Search URL
var photoURL = `https://api.foursquare.com/v2/venues/VENUE_ID/photos?VENUE_ID=${venueID}&client_id=${clientID}&client_secret=${clientSecret}&limit=${photoLimit}&v=${version}`;
//console.log(photoURL);

//Populate Venue Cards with Name and Address
function populateVenues() {
	for (var i = 0; i < 5; i++) {
		var venueName = data.response.venues[i].name;
		var venueAddress1 =
			data.response.venues[i].location.formattedAddress[0];
		var venueAddress2 =
			data.response.venues[i].location.formattedAddress[1];
		$(`#venue${i + 1}`).html(`<h6><strong>${venueName}<hr>`);
		$(`#venue${i + 1}`).append(`<p>${venueAddress1}<br>${venueAddress2}`);
	}
}

//Adds City to Weather widget
function addCity() {
	var city = data.response.geocode.feature.name;
	console.log(`4Sqaure data - city name${city}`);
	$(`#cityDisplay`).text(city);
}

//On Click Function - pull ZIP/City, ST, run AJAX call, display venue cards
$("#subbutton").click(function() {
	locationParam = $("#zipcode").val();
	console.log(`maps.js locationParam ${locationParam}`);
	ajaxCall();
});

function ajaxCall() {
	$.ajax({
		url: queryURL,
		method: "GET"
	})

		//Store API response in var data, run func populateVenues
		.then(function(response) {
			data = response;
			console.log(`full object from 4Square API`);
			console.log(response);
			// console.log(`Venue name and address`);
			// console.log(response.response.venues[0].name);
			// console.log(
			// 	response.response.venues[0].location.formattedAddress[0]
			// );
			// console.log(
			// 	response.response.venues[0].location.formattedAddress[1]
			// );
			populateVenues();
		});
}

ajaxCall();
addCity();

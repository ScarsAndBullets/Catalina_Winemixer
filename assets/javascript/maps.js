//Venues Hardcode
const clientID = "K1WLX4BKHD5EEE2JJADJTQWJYJB52IITFXVXUVULQSPWOHV4";
const clientSecret = "31E2BSQMJPIPOPCR54K2DTNGD0ILZPW5AL5LM42JRCBNWAD0";
const version = "20190326";
var locationParam = "Riverton, UT";
var venueParam = "coffee";
var resultLimit = "5";
var data;
var photoLimit = "1";
var venueID = "4b3b5794f964a520b27225e3";

var queryURL = `https://api.foursquare.com/v2/venues/search?near=${locationParam}&query=${venueParam}&client_id=${clientID}&client_secret=${clientSecret}&v=${version}&limit=${resultLimit}`;

var photoURL = `https://api.foursquare.com/v2/venues/VENUE_ID/photos?VENUE_ID=${venueID}&client_id=${clientID}&client_secret=${clientSecret}&limit=${photoLimit}&v=${version}`;
console.log(photoURL);

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
			data = response;
			console.log(response);
			console.log(response.response.venues[0].name);
			console.log(
				response.response.venues[0].location.formattedAddress[0]
			);
			console.log(
				response.response.venues[0].location.formattedAddress[1]
			);
			populateVenues();
		});
}

function addCity() {
	$(`#cityDisplay`).text(data.response.geocode.feature.name);
	console.log(
		`4Sqaure data - city name${data.response.geocode.feature.name}`
	);
}

function populateVenues() {
	for (var i = 0; i < 5; i++) {
		$(`#venue${i + 1}`).html(`<h6><strong>${data.response.venues[i].name}`);
		$(`#venue${i + 1}`).append(
			`<p>${data.response.venues[i].location.formattedAddress[0]}</br>${
				data.response.venues[i].location.formattedAddress[1]
			}`
		);
	}
}

function GetSong() {
	var song = [
		{
			song1: "https://www.youtube.com/embed/0IJfbsN7fpU",
			lyrics1: "http://www.azlyrics.com/lyrics/glassanimals/gooey.html"
		},
		{
			song1: "https://www.youtube.com/embed/hi4pzKvuEQM",
			lyrics1: "http://www.azlyrics.com/lyrics/chetfaker/gold.html"
		},
		{
			song1: "https://www.youtube.com/embed/DZ6yrWkdaJw",
			lyrics1:
				"http://www.bmichellepippin.com/wp-content/uploads/2012/06/633800769542445665-CAPTAINOBVIOUS.jpg"
		}
	];

	var rando = song[Math.floor(Math.random() * song.length)];

	document.getElementById("song1").src = rando.song1;

	document.getElementById("lyrics1").src = rando.lyrics1;

	document.getElementById("lyrics1").height = "100%";
	document.getElementById("lyrics1").width = "100%";

	document.getElementById("song1").height = "100%";
	document.getElementById("song1").width = "100%";

}

var colors = ["#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];

$(".button").click(function() {
	var rand = Math.floor(Math.random() * colors.length);
	$("body").css("background-color", colors[rand]);
});


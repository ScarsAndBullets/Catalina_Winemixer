// This is our API key
var weatherAPIKey = "f1e6ff86df990396171c136a8458725c";
var zipcode = "84110";
var ajaxResponse;
var queryURL =
	"http://api.openweathermap.org/data/2.5/weather?zip=" +
	zipcode +
	"&APPID=" +
	weatherAPIKey +
	"&units=imperial";
var iconIndex = "";
var iconURL =
	"<img src='http://openweathermap.org/img/w/" + iconIndex + ".png'>";

//console.log(queryURL);

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
		// headers: {
		// 	"Access-Control-Allow-Origin": "*"
		// }
	}).then(function(response) {
		ajaxResponse = response;
		//console.log(ajaxResponse);
		var city = response.name;
		//console.log(city);
		var temperature = response.main.temp;
		//console.log(temperature);
		var tempMax = response.main.temp_max;
		//console.log(tempMax);
		var tempMin = response.main.temp_min;
		//console.log(tempMin);
		var phrase = response.weather[0].description;
		//console.log(phrase);
		var weatherIcon = response.weather[0].icon;
		//console.log(weatherIcon);
		iconIndex = weatherIcon;

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

	var city = ajaxResponse.name;
	//console.log(city);
	var temperature = ajaxResponse.main.temp;
	//console.log(temperature);
	var tempMax = ajaxResponse.main.temp_max;
	//console.log(tempMax);
	var tempMin = ajaxResponse.main.temp_min;
	//console.log(tempMin);
	var phrase = ajaxResponse.weather[0].description;
	//console.log(phrase);
	var weatherIcon = ajaxResponse.weather[0].icon;
	//console.log(weatherIcon);
	iconIndex = weatherIcon;
	//console.log(iconURL);

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
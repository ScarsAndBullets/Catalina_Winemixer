//$(document).ready(function(){
// This is our API key
var weatherAPIKey = "f1e6ff86df990396171c136a8458725c";
var zipcode = "84110";
var ajaxResponse;
var queryURL =
	"https://api.openweathermap.org/data/2.5/weather?zip=" +
	zipcode +
	"&APPID=" +
	weatherAPIKey +
	"&units=imperial";
var iconIndex = "";
var iconURL = "https://openweathermap.org/img/w/" + iconIndex + ".png";
var currentTemperature = "";

$(document).ready();

//console.log(queryURL);

function getWeather() {
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
		var temperature = Math.floor(response.main.temp);
		currentTemperature = temperature;
		//console.log(temperature);
		var tempMax = Math.floor(response.main.temp_max);
		//console.log(tempMax);
		var tempMin = Math.floor(response.main.temp_min);
		//console.log(tempMin);
		var forecast = response.weather[0].description;
		//console.log(forecast);
		var weatherIcon = response.weather[0].icon;
		//console.log(weatherIcon);
		iconIndex = weatherIcon;

		iconURL = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
		//console.log("This is queryURL " + queryURL);

		$("#imageDisplay").html("<img src=" + iconURL + ">"); //$("#cityDisplay").text(city);
		$("#forecastDisplay").text(forecast);
		$("#temperatureDisplay").text(temperature + "° F"); //opt,shift,8 to display degrees icon
		$("#maxTempDisplay").text(tempMax + "° F"); //opt,shift,8 to display degrees icon
		$("#minTempDisplay").text(tempMin + "° F"); //opt,shift,8 to display degrees icon
		forecastUpdate();
	});
}
getWeather();

$("#subbutton").on("click", function(event) {
	event.preventDefault();
	zipcode = $("#zipcode").val();
	console.log("Zipcode = " + zipcode);
	queryURL =
		"https://api.openweathermap.org/data/2.5/weather?zip=" +
		zipcode +
		"&APPID=" +
		weatherAPIKey +
		"&units=imperial";

	var city = ajaxResponse.name;
	//console.log(city);
	var temperature = Math.floor(ajaxResponse.main.temp);
	currentTemperature = temperature;
	//console.log(temperature);
	var tempMax = Math.floor(ajaxResponse.main.temp_max);
	//console.log(tempMax);
	var tempMin = Math.floor(ajaxResponse.main.temp_min);
	//console.log(tempMin);
	var forecast = ajaxResponse.weather[0].description;
	//console.log(forecast);
	var weatherIcon = ajaxResponse.weather[0].icon;
	console.log(weatherIcon);
	iconIndex = weatherIcon;
	console.log(iconURL);
	iconURL = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
	//console.log("This is queryURL " + queryURL);

	$("#imageDisplay").html("<img src=" + iconURL + ">");
	$("#forecastDisplay").text(forecast);
	$("#temperatureDisplay").text(temperature + "° F"); //opt,shift,8 to display degrees icon
	$("#maxTempDisplay").text(tempMax + "° F"); //opt,shift,8 to display degrees icon
	$("#minTempDisplay").text(tempMin + "° F");
	//$("#zipcode").val("");
	$("#currentTemperature").val("");
	getWeather();
});

function forecastUpdate() {
	if (currentTemperature < 20) {
		$("#phraseDisplay").text(`
			If you enjoy this weather, your national animal is the beaver, and NO it is NOT a noble creature.
		`);
	} else if (currentTemperature > 20 && currentTemperature < 40) {
		$("#phraseDisplay").text(
			"Don't worry, it will warm up soon - like in three months I think. "
		);
	} else if (currentTemperature > 40 && currentTemperature < 60) {
		$("#phraseDisplay").text(
			"That slouchy beanie won't be unbearably (and ironically) uncomfortable."
		);
	} else if (currentTemperature > 60 && currentTemperature < 80) {
		$("#phraseDisplay").text(
			"This temperature is great - why haven't I moved to California? Oh right, it's full of Californians..."
		);
	} else if (currentTemperature > 75) {
		$("#phraseDisplay").text(
			"Better shave your back - just in case you decide to hit the beach..."
		);
	} else {
		$("#phraseDisplay").text(
			"Good Luck, and may God have mercy on your soul"
		);
	}

	if ((forecast = "clear sky")) {
		$("#phraseDisplay2").text("Clear skies... what's the catch?");
	} else if ((forecast = "few clouds")) {
		$("#phraseDisplay2").text("A few clouds, you'll barely notice them.");
	} else if ((forecast = "scattered clouds")) {
		$("#phraseDisplay2").text(
			"Scattered clouds... like a toddler's shoes randomly arranged throughout the house "
		);
	} else if ((forecast = "broken clouds")) {
		$("#phraseDisplay2").text(
			"Broken clouds... which means you might see the sun today if you're lucky. "
		);
	} else if ((forecast = "light rain")) {
		$("#phraseDisplay2").text(
			"A light drizzle, my nizzle. Are Snoop Dogg jokes still relevant?"
		);
	} else if ((forecast = "shower rain")) {
		$("#phraseDisplay2").text(
			"Shower rain - just like taking a shower, except the water is cold and you're fully clothed."
		);
	} else if ((forecast = "rain")) {
		$("#phraseDisplay2").text("Rain - yeah, you're going to get wet.");
	} else if ((forecast = "thunderstorm")) {
		$("#phraseDisplay2").text(
			"Thunderstorm - you're going to get wet and your dog is going to freak out."
		);
	} else if ((forecast = "snow")) {
		$("#phraseDisplay2").text(
			"Snow - if it's December 24th, it's enchanting. If it's March, you might want to burn this whole mother#$%#^ down."
		);
	} else if ((forecast = "mist")) {
		$("#phraseDisplay2").text(
			"Mist - how enchanting... I hope your insurance is up to date because you're going to rear-end someone."
		);
	} else {
		$("#phraseDisplay2").text("Who knows... ");
	}
}

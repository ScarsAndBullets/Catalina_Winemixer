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

		//$("#cityDisplay").text(city);
		$("#imageDisplay").text(iconURL);
		$("#phraseDisplay").text(phrase);
		$("#temperatureDisplay").text(temperature);	
		$("#maxTempDisplay").text(tempMax);
		$("#minTempDisplay").text(tempMin);
	});
}
getWeather();

$("#subbutton").on("click", function() {

	zipcode = $("#zipcode").val();
	console.log("Zipcode = " + zipcode);
	queryURL =
		"http://api.openweathermap.org/data/2.5/weather?zip=" +
		zipcode +
		"&APPID=" +
		weatherAPIKey +
		"&units=imperial";
	iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
	//console.log("This is queryURL " + queryURL);

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

	//$("#cityDisplay").text(city);
	$("#imageDisplay").text(iconURL);
	$("#phraseDisplay").text(phrase);
	$("#temperatureDisplay").text(temperature);	
	$("#maxTempDisplay").text(tempMax);
	$("#minTempDisplay").text(tempMin);

	getWeather();
});

//some useful comments


//$(document).ready(function(){
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
var iconURL = "http://openweathermap.org/img/w/" + iconIndex + ".png";
var currentTemperature = "";


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

		iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
	//console.log("This is queryURL " + queryURL);

		$('#imageDisplay').html("<img src=" + iconURL + ">");//$("#cityDisplay").text(city);
		$("#forecastDisplay").text(forecast);
		$("#temperatureDisplay").text(temperature + "° F");	//opt,shift,8 to display degrees icon
		$("#maxTempDisplay").text(tempMax + "° F"); //opt,shift,8 to display degrees icon
		$("#minTempDisplay").text(tempMin + "° F"); //opt,shift,8 to display degrees icon
		forecastUpdate();
	});
}
getWeather();

$("#subbutton").on("click", function() {

	event.preventDefault(event);

	zipcode = $("#zipcode").val();
	console.log("Zipcode = " + zipcode);
	queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=" +zipcode + "&APPID=" +weatherAPIKey +"&units=imperial";

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
	iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
	//console.log("This is queryURL " + queryURL);
	
	
	$('#imageDisplay').html("<img src=" + iconURL + ">");
	$("#forecastDisplay").text(forecast);
	$("#temperatureDisplay").text(temperature + "° F");	//opt,shift,8 to display degrees icon
	$("#maxTempDisplay").text(tempMax + "° F"); //opt,shift,8 to display degrees icon
	$("#minTempDisplay").text(tempMin + "° F"); 
	$("#zipcode").val("");
	//$("#currentTemperature").val("");
	getWeather();
	
	});



	function forecastUpdate()
	{
		
		if (currentTemperature < 20)
		{
			$("#phraseDisplay").text("It's too damn cold, stay home and drink coffee");
		}
		else if (currentTemperature > 20 && currentTemperature < 40)
		{
			$("#phraseDisplay").text("Jacket.");
		}
		else if (currentTemperature > 40 && currentTemperature < 60)
		{
			$("#phraseDisplay").text("Light Jaket, Sit Outside");
		}
		else if (currentTemperature > 60 && currentTemperature < 80)
		{
			$("#phraseDisplay").text("Shorts, Sandals & Tanktop");
		}
		else if (currentTemperature >75)
		{
			$("#phraseDisplay").text("Shorts, Sandals and Tanktop, Sunscreen");
		}
		else
		{
			$("#phraseDisplay").text("Good Luck");
		}

		if (forecast = "clear sky")
		{
			$("#phraseDisplay").append("Enjoy the Weather");
		}
		else if (forecast = "few clouds")
		{
			$("#phraseDisplay").append("few clouds");	
		}
		else if (forecast = "scattered clouds")
		{
			$("#phraseDisplay").append("scattered clouds");	
		}
		else if (forecast = "broken clouds")
		{
			$("#phraseDisplay").append("broken clouds");	
		}
		else if (forecast = "shower rain")
		{
			$("#phraseDisplay").append("shower rain");	
		}
		else if (forecast = "rain")
		{
			$("#phraseDisplay").append("rain");	
		}
		else if (forecast = "thunderstorm")
		{
			$("#phraseDisplay").append("thunderstorm");	
		}
		else if (forecast = "snow")
		{
			$("#phraseDisplay").append("snow");	
		}
		else if (forecast = "mist")
		{
			$("#phraseDisplay").append("mist");	
		}
		else
		{
			$("#phraseDisplay").append("Do Whatever You Want");
		}

	}


//}); //end of document.ready

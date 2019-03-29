// This is our API key
var weatherAPIKey = "DFl6qNBXCoZzgxeVbBFKpQ62c5sAFz0B"
//  "q1oW3mN85QbtEooYjAPTYJraVlHLxlHG";
var weatherLocationKey = "331216";
var zipcode = "84115";
var ajaxResponse;
var weatherResponse = "";

var queryURL = "http://dataservice.accuweather.com/locations/v1/search?apikey="+weatherAPIKey+"&q="+zipcode;
// var queryURL `https://dataservice.accuweather.com/locations/v1/postalcodes/search?q=16801&apikey=${weatherAPIKey}&q=${zipcode}`;
var forecastURL = "https://dataservice.accuweather.com/forecasts/v1/daily/1day/"+weatherLocationKey+"?apikey="+weatherAPIKey+"&details=true";

console.log(zipcode);

function getWeather() {
	$.ajax({
		url: queryURL,
		method: "GET",

		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	})
	.then(function(response) {
		var ajaxResponse = response;
		console.log("This is response from queryURL " + ajaxResponse);
		var key = ajaxResponse[0].ParentCity.Key
		console.log("this is the key")
		console.log(key)

		weatherLocationKey = key;

	});
} 

function forecast() {
	$.ajax({
		url: forecastURL,
		method: "GET",
		headers:
		{
			"Access-Control-Allow-Origin": "*"
		}
	  })	
	  .then(function(forecastResponse) {
			weatherResponse = forecastResponse;
			console.log(forecastResponse)
			//Maximum Temp
			var motherFucker = forecastResponse.DailyForecasts[0].Temperature.Maximum.Value
			console.log(motherFucker)
			//Minimum Temp
			var littleMotherFucker = forecastResponse.DailyForecasts[0].Temperature.Minimum.Value
			console.log(littleMotherFucker)
			//Phrase
			var anotherMotherFucker = forecastResponse.DailyForecasts[0].Day.IconPhrase
			console.log(anotherMotherFucker)

			$("#fuckthis").text("Maximum Temp: " + motherFucker + " F " + "Minimum Temp: " + littleMotherFucker);

			$("#motherfuckerheader").text(anotherMotherFucker);
			
	  });
}
   
$("#subbutton").on("click", function() {
  zipcode = $("#zipcode").val();
  queryURL = "http://dataservice.accuweather.com/locations/v1/search?apikey="+weatherAPIKey+"&q="+zipcode;

  console.log("Zipcode = " + zipcode);
  console.log("This is queryURL " + queryURL);
  //console.log(ajaxResponse);

	forecast()
	console.log("This is forecast URL " + forecastURL);
	  
});

getWeather();

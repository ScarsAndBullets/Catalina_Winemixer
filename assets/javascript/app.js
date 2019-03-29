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


$.ajax({
	url: queryURL,
	method: "GET",

	headers: {
		"Access-Control-Allow-Origin": "*"
	}
})
	// We store all of the retrieved data inside of an object called "response"

.then(function(response) 
{
	var ajaxResponse = response;
	console.log("This is response from queryURL " + ajaxResponse);
	// weatherLocationkey = response.ParentCity[;
	// console.log(weatherLocationKey);
	var key = ajaxResponse[0].ParentCity.Key
	console.log("this is the key")
	console.log(key)

	ajaxResponse = key;

}); 
  
$("#subbutton").on("click", function()
{
  zipcode = $("#zipcode").val();
  queryURL = "http://dataservice.accuweather.com/locations/v1/search?apikey="+weatherAPIKey+"&q="+zipcode;
 
//   weatherLocationkey = response.ParentCity[1];
//   console.log(weatherLocationKey);
  //zipcode = newZipcode;
  console.log("Zipcode = " + zipcode);
  console.log("This is queryURL " + queryURL);
  console.log(ajaxResponse);


//   $.ajax({
// 	url: forecastURL,
// 	method: "GET",
// 	headers:
// 	{
// 		"Access-Control-Allow-Origin": "*"
// 	}
//   })	
//   .then(function(forecastResponse) 
//   {
// 		weatherResponse = forecastResponse;
// 		console.log("This is forecast response " + forecastResponse);
// 		//weatherLocationkey = response.ParentCity;		
//   });
// 	  console.log("This is forecast URL " + forecastURL);
	  
	  
});





// This is our API key
var weatherAPIKey = "q1oW3mN85QbtEooYjAPTYJraVlHLxlHG";
var zipcode = "84115";
//const gmapsKey = "AIzaSyAHg0cxsczfC8WJSv5lhqZ3SAbmGKj_dUQ";

var queryURL = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${weatherAPIKey}&q=${zipcode}`;
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
	url: queryURL,
	method: "GET",
	headers:
	 {
		"Access-Control-Allow-Origin": "*"
	}
})
	// We store all of the retrieved data inside of an object called "response"
	.then(function(response) {
		console.log(response);
  });
  
  $("#subbutton").on("click", function(e)
{
	e.preventDefault()
	console.log("Submit did stuff")
  newZipcode = $("#zipcode").val();
  zipcode = newZipcode;
  console.log("This is zipcode " + zipcode);
});

$(document).ready(console.log("Ready"))
function test() {
	console.log("Test")
}
  
  $("#subbutton").on("click", function()
{
 	alert(" This shit is working ");
//   newZipcode = $("#zipcode");
//   zipcode = newZipcode;
//   console.log("This is zipcode " + newZipcode);
});

// Map hardcode
// var queryURL2 = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.4136,%20-111.8926&radius=2500&keyword=coffee&key=${gmapsKey}`;
// // Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
// 	url: queryURL2,
// 	method: "GET",
// 	headers: {
// 		"Access-Control-Allow-Origin": "*"
// 	}
// })
// 	// We store all of the retrieved data inside of an object called "response"
// 	.then(function(response) {
// 		console.log(response);
// 	});

//
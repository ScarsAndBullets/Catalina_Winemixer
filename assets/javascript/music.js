$("#bun-button").on("click", function() {

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=manbun";
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    
      .then(function(response) {
    
        var imageUrl = response.data.image_original_url;
    
        var hipsterImage = $("<img>");
    
        hipsterImage.attr("src", imageUrl);
        hipsterImage.attr("alt", "hipster image");
        
        $("#memespan").empty();
        $("#memespan").append(hipsterImage);
      });
    });
    
var topics=["pizza","donuts","tacos"];

function displayGifs(){
    var snackName= $(this).attr("data-nom");
    var queryURL= "http://api.giphy.com/v1/gifs/search?q=" + snackName + "&api_key=4fSNaZT454kRTbS8rBtI9FY9n0wthuSr" + "limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        
       var snackDiv = $("#snacks");

       var gifURL = response.original_still;
       var stillGIF = $("<img>").attr("src",gifURL);
       snackDiv.append(stillGIF);
    });
}

$("#addSnack").on("click",function(event){

    event.preventDefault();

    var newSnack = ("#snack-input").val().trim();

    topics.push(newSnack);

    renderButtons();
});

$(document).on("cilck",".button-style", displayGifs);

renderButtons();

function renderButtons(){

    $("#snack-buttons").empty();

    for(i= 0;i<topics.length; i++){

    var butt = $("<button>");

    butt.addClass("button-style");

    butt.attr("data-nom", topics[i]);

    butt.text(topics[i]);

    $("#snack-buttons").append(butt);
    }

}
renderButtons();


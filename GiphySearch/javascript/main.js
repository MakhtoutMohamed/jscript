/* 1. Grap the input value */


var go = document.querySelector(".js-go");
go.addEventListener('click', function() {
    var input = document.querySelector("input").value;
    // console.log(input);
    pushToDOM(input);
});


var keygo = document.querySelector(".js-userinput");
keygo.addEventListener('keyup', function(e) {
    var input = document.querySelector("input").value;
    // console.log(input);

    // if the key ENTER is pressed...
    if(e.which === 13){
        pushToDOM(input);
    }
});



/* 2. do the data stuff with the API */

var url = "https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=GjYMjpQ3ygalEBkdAyPalBLS6fy19fsl";

// AJAX Request
var GiphyAjaxCall = new XMLHttpRequest();
GiphyAjaxCall.open( 'GET',url );
GiphyAjaxCall.send();

GiphyAjaxCall.addEventListener('load',function(e){
    var data = e.target.response;
    // console.log(data);
    pushToDOM(data);

});



/* 3. Show me the GIFs */

function pushToDOM(input){

    var response = JSON.parse(input);

    var imageUrl = response.data;

    imageUrl.forEach(function(image){

        var src = image.images.fixed_height.url;
        // console.log(src);
        var container = document.querySelector(".js-container");
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

    });

// https://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=GjYMjpQ3ygalEBkdAyPalBLS6fy19fsl
// https://tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv
}
/* ------------------------1. Grab the input value----------------------------------------*/

//var x = document.querySelector("input").value;
//console.log(x)

/* Click Input */
var button = document.querySelector("button");
button.addEventListener("click", function() {
    var input = document.querySelector("input").value;

    //console.log(x);
    //console.log(e);

    //var y = document.querySelector(".js-container");
    //y.innerHTML = x;  

    getInput(input);
  
});

// code for Enter INPUT
var x = document.querySelector(".js-userinput");
x.addEventListener("keyup", function(e) {
//e mean event okay! passe rata patalawan e mokadda hoyanna epa
//e walin ethana una hamadema data denawa eg: console.log(e)

    var input = document.querySelector("input").value;

    //if(e.key === 'Enter') dannath puluwan but meka thamai hodatama karanne 
    if(e.which === 13) { 
        getInput(input);
        //console.log(e);
    }

});



/* --------------------------2. Do the stuff with the API ------------------------------*/

function getInput(item) {
    var query = item.split(' ').join('+')
    
  
    var url = "https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";
  
  
  
  
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    
    
    GiphyAJAXCall.addEventListener('load', function(e) {
        
        var data = e.target.response
        pushtoDom(data)
        
    });
  
}
  



/* ---------------------------3. show me the Gifs -------------------------------------------- */

function pushtoDom(input) {
    var response = JSON.parse(input);
    var f = document.querySelector(".js-container");
    var result = document.querySelector(".results");
    
    clear(f);
    clear(result);
      
    var imageUrls = response.data;

    imageUrls.forEach(function(gif){

        //console.log(gif.images.fixed_height.url);

        var src = gif.images.fixed_height.url;

        result.innerHTML = src.length + " gifs found";
        //f.innerHTML = f.innerHTML + "<img src=\"" + src + "\" class=\"container-image\">";
        f.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

        // look why we use escape (/) symbol to next to the (\"........\") gif url
        //because we need to use JS without breaking the HTML code

    })

    
    function clear(item) {
        item.innerHTML = "";
    }
  
    //alert("are we in pushtoDom() ?");
//  var y = document.querySelector(".js-container");
//  y.innerHTML = "<img src=" + imageUrls + ">";
    //y.innerHTML = "<img src=\"" + imageUrl + "\">";
    
    
    
  
  }
var cardsContEl = document.querySelector("#cards-cont");
//JS variables for first api
var searchBtnEl = document.querySelector("#submit-form");// Id for the complete form
var searchTextEl = document.querySelector(".city-input");//to get text input (city)
var searchTypeEl = document.querySelector(".type-input");//to get text input (type)
//JS variables for swithing content
var switchBtnEl =document.querySelector ("#click-btn"); //header button
var eventContEl =document.querySelector (".events"); //to hide class elements
var movieContEl =document.querySelector (".movies"); //to hide divs
var movieTextContEl =document.querySelector (".moviestype"); //to show movies text class
var eventTextContEl =document.querySelector (".events-desc");// to show events content
var bodyContEl =document.querySelector ("#body"); // to switch background
//JS variables for second api
var searchMovEl = document.querySelector("#movie-form");//Id for the complete form
var searchmovieEl = document.querySelector(".movie-input");//Id to get text input (movie)
var movieTypeEl = document.querySelector(".movietype-input");//Id to get text input (type)


function displayevents(cityChosen,typeChosen) {
    // Insert the API 
    var requestUrl = "https://api.seatgeek.com/2/events?venue.city="+ cityChosen +"&taxonomies.name=" + typeChosen + "&client_id=MjYyMjgxOTR8MTY0Nzk4NDUyMS43MjMxMTM4";
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {

      showEvents(data) 

    } )}

    var showEvents = function (data) {
        for ( var i = 0; i < 15; i++) {
        var cityEvent = data.events[i].venue.city;
        var venueEvent = data.events[i].venue.name;
        var dateEvent = data.events[i].datetime_utc;
        var addressEvent = data.events[i].venue.address;
        var performEvent = data.events[i].performers[0].name;
        var picEvent = data.events[i].performers[0].image;
        var linkEvent = data.events[i].performers[0].url;
       //console.log(performEvent + picEvent)
  var venue = document.createElement("h4");
  var date = document.createElement("h4");
  var address = document.createElement("h4");
  var city = document.createElement("h4");
  var performer = document.createElement("h3");
  var picture = document.createElement("img");
  var picCont = document.createElement("a");
  var cardEl = document.createElement("div");
  
  cardEl.classList.add("cards")
  picCont.href = linkEvent;
venue.textContent = venueEvent;
date.textContent = dateEvent;
address.textContent = addressEvent;
picture.src = picEvent;
city.textContent = cityEvent;
performer.textContent = performEvent;
picCont.append(picture)

cardEl.append(performer,picCont,venue,date,address,city)

cardsContEl.append(cardEl)
}
    }


var eventSubmit = function(event) {
    event.preventDefault();
    var cityChosen = searchTextEl.value.trim();
    var typeChosen = searchTypeEl.value.trim();
  displayevents(cityChosen,typeChosen);

    searchTextEl.textContent = "";
    cardsContEl.textContent = ""; 
 
  
  }

  var switchf = function(event) {
  var eventType = event.target.getAttribute("class");
    if (eventType === "movie-btn") {
eventContEl.classList.add("hidden")
movieContEl.classList.remove("hidden")
eventTextContEl.classList.add("hidden")
movieTextContEl.classList.remove("hidden")
bodyContEl.classList.add("moviealt")
    }

    if (eventType === "event-btn") {
        eventContEl.classList.remove("hidden")
        movieContEl.classList.add("hidden")
        eventTextContEl.classList.remove("hidden")
        movieTextContEl.classList.add("hidden")
        bodyContEl.classList.remove("moviealt")
    }
  }
//get text values from buttons
  var getMovValue = function(event) {
    event.preventDefault();
    var movieChosen = searchmovieEl.value.trim();
    var typemChosen = movieTypeEl.value.trim();
    //console.log(typemChosen,movieChosen)
  getSecApi(typemChosen);

    searchTextEl.textContent = "";
    cardsContEl.textContent = ""; 
  }

                                         
function getSecApi(typemChosen) {
    // Insert the API url
    var requestUrl = "https://api.watchmode.com/v1/list-titles/?apiKey=xMnzhPs9IXbgnVUA9SFnP4fIVgZyYQk8fGbF6zid&genres=" +typemChosen + "&types=movie";
fetch(requestUrl)
.then(function (response) {
    return response.json();
})  

.then(function(data) {
  generateIds(data)
}
    )
}

var generateIds = function(data) {
for ( var i = 0; i < 5; i++) {

  var value = Math.floor(Math.random() * 150);
var movieId= data.titles[value].id;
// console.log(movieName,movieId)

displayMovieResult(movieId); //call to the display function
}
}



function displayMovieResult(movieId) {
  // Insert the second API 
  var requestUrl = "https://api.watchmode.com/v1/title/" + movieId +"/details/?apiKey=xMnzhPs9IXbgnVUA9SFnP4fIVgZyYQk8fGbF6zid";
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function(data) {
    var moviePoster = data.poster;
      var movieYear = data.year;
      var movieTitle = data.title;
      var movieRunTime = data.runtime_minutes;
      var moviePlot = data.plot_overview;

      var title = document.createElement("h3");
      var year = document.createElement("h4");
      var time = document.createElement("h4");
      var plot = document.createElement("h4");
      var poster = document.createElement("img");
      var cardEl = document.createElement("div");
  
      cardEl.classList.add("cards")
    

      poster.src =moviePoster;
      title.textContent = movieTitle;
      year.textContent = movieYear;
      time.textContent = movieRunTime;
      plot.textContent = moviePlot;
     
      cardsContEl.append(cardEl)
      
cardEl.append(poster,title,year,time,plot) 

  })
}
//calls getMovValue funcion 
searchMovEl.addEventListener("submit", getMovValue);
//calls eventSubmit function
searchBtnEl.addEventListener("submit", eventSubmit);
//switches between movies/events app
switchBtnEl.addEventListener("click", switchf);

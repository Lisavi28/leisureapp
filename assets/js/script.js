var cardEl1 = document.querySelector("#card-1");
var cardEl2 = document.querySelector("#card-2");
var cardEl3 = document.querySelector("#card-3");
var cardEl4 = document.querySelector("#card-4");
var eventCards = [cardEl1,cardEl2,cardEl3,cardEl4]
var searchBtnEl = document.querySelector("#submit-form");
var searchTextEl = document.querySelector(".city-input");
var searchTypeEl = document.querySelector(".type-input");
var switchBtnEl =document.querySelector ("#click-btn");




function displayevents(cityChosen,typeChosen) {
    // Insert the API 
    var requestUrl = "https://api.seatgeek.com/2/events?venue.city="+ cityChosen +"&taxonomies.name=" + typeChosen + "&client_id=MjYyMjgxOTR8MTY0Nzk4NDUyMS43MjMxMTM4";
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        for ( var i = 0; i < 4; i++) {
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
  picCont.href = linkEvent;
venue.textContent = venueEvent;
date.textContent = dateEvent;
address.textContent = addressEvent;
picture.src = picEvent;
city.textContent = cityEvent;
performer.textContent = performEvent;

picCont.append(picture)
eventCards[i].append(performer,picCont,venue,date,address,city)
}
    })
}

var eventSubmit = function(event) {
    event.preventDefault();
    var cityChosen = searchTextEl.value.trim();
    var typeChosen = searchTypeEl.value.trim();
  displayevents(cityChosen,typeChosen);

    searchTextEl.textContent = "";
    cardEl1.textContent = ""; 
    cardEl2.textContent = ""; 
    cardEl3.textContent = ""; 
    cardEl4.textContent = ""; 
  
  }

  var switchf = function(event) {
  var eventType = event.target.getAttribute("class");
    if (eventType === "movie-btn") {
        
    }
  }


  searchBtnEl.addEventListener("submit", eventSubmit);

  switchBtnEl.addEventListener("click", switchf);


 /* function gettaxApi() {
    // Insert the API url
    var requestUrl = 'https://api.seatgeek.com/2/taxonomies?&client_id=MjYyMjgxOTR8MTY0Nzk4NDUyMS43MjMxMTM4'
    fetch(requestUrl);
}*/





function getSecApi() {
    // Insert the API url
    var requestUrl = 'https://api.watchmode.com/v1/list-titles/?apiKey=yB2XQSNXcQqedX9cGIOyktWNkDzHlZK2tNoGyah0&genres=3&types=movie'
    fetch(requestUrl);
}

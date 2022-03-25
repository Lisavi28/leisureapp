function getApi() {
    // Insert the API 
    var requestUrl = 'https://api.seatgeek.com/2/events?venue.city=nashville&client_id=MjYyMjgxOTR8MTY0Nzk4NDUyMS43MjMxMTM4';
    fetch(requestUrl);
}

function getSecApi() {
    // Insert the API url 
    var requestUrl = 'https://api.watchmode.com/v1/list-titles/?apiKey=yB2XQSNXcQqedX9cGIOyktWNkDzHlZK2tNoGyah0&genres=3&types=movie'
    fetch(requestUrl);
}
getSecApi();
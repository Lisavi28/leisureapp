function getApi() {
    // TODO: Insert the API url to get a list of your repos
    var requestUrl = 'https://api.seatgeek.com/2/events?geoip=98.213.245.205&range=12mi&client_id=';
    fetch(requestUrl);
}
getApi()
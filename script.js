var weatherApiRootUrl = "https://api.openweathermap.org";
var weatherApiKey = "634c860cea6d4fc60d7b5d8fa5e16a03";
var searchHistory = [];

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var today = document.querySelector('#today');
var FiveDayForecast = document.querySelector('#5-day');

function getWeatherToday(city, weather) {
  var date = dayjs().format("MM-DD-YYYY HH:mm:ss"); 
  
}
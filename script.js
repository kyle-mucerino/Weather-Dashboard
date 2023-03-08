var weatherApiRootUrl =
  "https://api.openweathermap.org&634c860cea6d4fc60d7b5d8fa5e16a03";
var weatherApiKey = "634c860cea6d4fc60d7b5d8fa5e16a03";
var searchHistory = [];
var searchBtn = document.getElementById("search");

var searchForm = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var searchHistory = document.querySelector(".search-history");
var today = document.querySelector("#today");
var FiveDayForecast = document.querySelector("fiveDay");
searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var city = document.getElementById("search-input").value;
  getApiData(city);
});
function getApiData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((ApiData) => {
      console.log(ApiData);
      renderWeatherToday(city, ApiData.list[0])
    });
}

function renderWeatherToday(city, weather) {
  var date = dayjs().format("MM-DD-YYYY HH:mm:ss");
  var tempF = weather.main.temp;
  var windMph = weather.wind.speed;
  var humidity = weather.main.humidity;
  var weatherIconUrl =
    "https://openweathermap.org/img/w/${data.weather[0].icon}.png";
  var weatherIconDescription = data.weather[0].description;

  var card = document.createElement("div");
  var heading = document.createElement("h2");
  var weatherIcon = document.createElement("img");
  var tempEl = document.createElement("p");
  var windEl = document.createElement("p");
  var humidityEl = document.createElement("p");

  
}

//renderWeatherToday();

$("#today").text(dayjs().format("dddd, MMMM D, YYYY"));

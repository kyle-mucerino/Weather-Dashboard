var weatherApiRootUrl = "https://api.openweathermap.org";
var weatherApiKey = "634c860cea6d4fc60d7b5d8fa5e16a03";
var searchHistory = [];

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var today = document.querySelector('#today');
var FiveDayForecast = document.querySelector('#5-day');

function getWeatherToday(city, weather) {
  var date = dayjs().format("MM-DD-YYYY HH:mm:ss"); 
  var tempF = weather.main.temp;
  var windMph = weather.wind.speed;
  var humidity = weather.main.humidity;
  var weatherIconUrl =
    "http://openweathermap.org/img/w/${data.weather[0].icon}.png";
  var weatherIconDescription = data.weather[0].description;
  
  var card = document.createElement('div');
  var heading = document.createElement('h2');
  var weatherIcon = document.createElement('img');
  var tempEl = document.createElement('p');
  var windEl = document.createElement("p"); 
  var humidityEl = document.createElement("p");
  
  card.setAttribute('class', card);
  tempEl.setAttribute('class', 'card-text');
  windEl.setAttribute('class', 'card-text');
  humidityEl.setAttribute('class', 'card-text');
  weatherIcon.setAttribute('src', weatherIconUrl);
  weatherIcon.setAttribute('alt', weatherIconDescription);

  heading.textContent = `${city} (${date})`;
  heading.append(weatherIcon);
  tempEl.textContent = `Temp: ${tempF}°F`;
  windEl.textContent = `Wind: ${windMph}mph`;
  humidityEl.textContent = `Humidity: ${humidity}%`;
  card.append(heading, tempEl. windEl, humidityEl);
  today.innerHTML = '';
  today.append(card);
}
var icon = document.querySelector('.icon');
var time = document.querySelector('.time');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var cityName= document.querySelector('.cityName')
var humudity = document.querySelector('.humidity');
var sunrise = document.querySelector('.sunrise');
var sunset = document.querySelector('.sunset');
var Search = document.querySelector('#Search');
var key = 'fb9846360233e1bbeb23ed399c5b9e06';
var city = 'Atlanta';
var requestURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`

fetch(requestURL)
  .then(response => response.json())
  .then(data => {

    const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll('"','')
    const sunrise =  new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    const pic = `http://openweathermap.org/img/wn/${iconId}@2x.png`
      console.log(Search.value);
      var newTemp = data.main.temp ;
      var newCity = data.name;
      newSearch = Search.value
      var newWind = JSON.stringify(data.wind.speed)

        icon.innerHTML = `<img src=${pic} />`
        cityName.textContent = newCity;
         temp.textContent =  newTemp;
         wind.textContent = newWind + ' ' +'mph';

    });

  
  

  function query() {
    var citySearch = Search.value 
    city = citySearch; 
    console.log('hey');
    
    var requestURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
  
      const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll('"','')
      const sunrise =  new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  
      const pic = `http://openweathermap.org/img/wn/${iconId}@2x.png`
        console.log(Search.value);
        var newTemp = data.main.temp ;
        var newCity = data.name;
        var newSearch = Search.value
        var newWind = JSON.stringify(data.wind.speed)
  
          icon.innerHTML = `<img src=${pic} />`
          cityName.textContent = newCity;
           temp.textContent =  newTemp;
           wind.textContent = newWind + ' ' +'mph';
         });
    }
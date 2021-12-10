var icon = document.querySelector('.icon');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var cityName= document.querySelector('.cityName')
var humidity = document.querySelector('.humidity');
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
      
    console.log(data.dt);
      var newHumidity = data.main.humidity;
      var newDate = new Date(data.dt* 1000).toDateString();
      var newTemp = data.main.temp ;
      var newCity = data.name;
      newSearch = Search.value
      var newWind = JSON.stringify(data.wind.speed)

        icon.innerHTML = `<img src=${pic} />`
        cityName.textContent = 'City:' + ' ' + newCity;
         temp.textContent =  'Temperture:' + ' ' + newTemp;
         humidity.textContent = 'Humidity:' + ' ' +  newHumidity;
         wind.textContent = 'Wind Speed:' + ' ' + newWind + ' ' +'mph';
        date.textContent = 'Date:'+' '+newDate;
    });

  
  

  function query() {
    var citySearch = Search.value 
    city = citySearch; 
    console.log('hey');
    
    var requestURL= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`
    fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
  
      const iconId = data.list[0].weather[0].icon;
      const sunrise =  new Date(data.city.sunrise * 1000).toLocaleTimeString();
  
      const pic = `http://openweathermap.org/img/wn/${iconId}@2x.png`

      var newHumidity = data.list[0].main.humidity; 
      var newTemp = data.list[0].main.temp ;
      var newCity = data.city.name;
      newSearch = Search.value
      var newWind = JSON.stringify(data.list[0].wind.speed)

        icon.innerHTML = `<img src=${pic} />`
        cityName.textContent = 'City:' + ' ' + newCity;
         temp.textContent =  'Temperture:' + ' ' + newTemp;
         humidity.textContent = 'Humidity:' + ' ' +  newHumidity;
         wind.textContent = 'Wind Speed:' + ' ' + newWind + ' ' +'mph';
         });
   
         var newArr=[
  
          data.city.name,
          data.list[0].main.humidity,
          data.list[0].main.temp,
          data.list[0].wind.speed,
          data.dt,
     
          data.city.name,
          data.list[7].main.humidity,
          data.list[7].main.temp,
          data.list[7].wind.speed,
          data.dt,
     
          data.city.name,
          data.list[15].main.humidity, 
          data.list[15].main.temp,
          data.list[15].wind.speed,
          data.dt,
      
          data.city.name,
          data.list[23].main.humidity,
          data.list[23].main.temp,
          data.list[23].wind.speed,
          data.dt,

          data.city.name,
          data.list[31].main.humidity,
          data.list[31].main.temp,
          data.list[31].wind.speed,
          data.dt
    
    ];

    var icon2 = document.querySelector('.icon');
    var date2 = document.querySelector('.date');
    var temp2 = document.querySelector('.temp');
    var wind2 = document.querySelector('.wind');
    var cityName2= document.querySelector('.cityName')
    var humidity2 = document.querySelector('.humidity');
    
    var icon3 = document.querySelector('.icon');
    var date3 = document.querySelector('.date');
    var temp3 = document.querySelector('.temp');
    var wind3 = document.querySelector('.wind');
    var cityName3= document.querySelector('.cityName')
    var humidity3 = document.querySelector('.humidity');
    
    var icon4 = document.querySelector('.icon');
    var date4 = document.querySelector('.date');
    var temp4 = document.querySelector('.temp');
    var wind4 = document.querySelector('.wind');
    var cityName4= document.querySelector('.cityName')
    var humidity4 = document.querySelector('.humidity');
    
    var icon5 = document.querySelector('.icon');
    var date5 = document.querySelector('.date');
    var temp5 = document.querySelector('.temp');
    var wind5 = document.querySelector('.wind');
    var cityName5= document.querySelector('.cityName')
    var humidity5 = document.querySelector('.humidity');
    
    var icon6 = document.querySelector('.icon');
    var date6 = document.querySelector('.date');
    var temp6 = document.querySelector('.temp');
    var wind6 = document.querySelector('.wind');
    var cityName6 = document.querySelector('.cityName')
    var humidity6 = document.querySelector('.humidity');

      }



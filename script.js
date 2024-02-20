var icon = document.querySelector(".icon");
var date = document.querySelector(".date");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var cityName = document.querySelector(".cityName");
var humidity = document.querySelector(".humidity");
var Search = document.querySelector("#Search");
var key = "fb9846360233e1bbeb23ed399c5b9e06";
var city = "Atlanta";
var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;

fetch(requestURL)
  .then((response) => response.json())
  .then((data) => {
    const iconId = JSON.stringify(data.weather[0]["icon"]).replaceAll('"', "");
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    const pic = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

    console.log(data.dt);
    var newHumidity = data.main.humidity;
    var newDate = new Date(data.dt * 1000).toDateString();
    var newTemp = data.main.temp;
    var newCity = data.name;
    newSearch = Search.value;
    var newWind = JSON.stringify(data.wind.speed);

    icon.innerHTML = `<img src=${pic} />`;
    cityName.textContent = "City:" + " " + newCity;
    temp.textContent = "Temperature:" + " " + newTemp ;
    humidity.textContent = "Humidity:" + " " + newHumidity + "%";
    wind.textContent = "Wind Speed:" + " " + newWind + " " + "mph";
    date.textContent = "Date:" + " " + newDate;
    console.log(newDate);
  });

function query() {
  var citySearch = Search.value;
  city = citySearch;
  console.log("hey");

  var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${key}`;
  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const iconId2 = data.list[0].weather[0].icon;
      const iconId3 = data.list[8].weather[0].icon;
      const iconId4 = data.list[16].weather[0].icon;
      const iconId5 = data.list[24].weather[0].icon;
      const iconId6 = data.list[32].weather[0].icon;
      const sunrise = new Date(data.city.sunrise * 1000).toLocaleTimeString();

      const pic2 = `https://openweathermap.org/img/wn/${iconId2}@2x.png`;
      const pic3 = `https://openweathermap.org/img/wn/${iconId3}@2x.png`;
      const pic4 = `https://openweathermap.org/img/wn/${iconId4}@2x.png`;
      const pic5 = `https://openweathermap.org/img/wn/${iconId5}@2x.png`;
      const pic6 = `https://openweathermap.org/img/wn/${iconId6}@2x.png`;

      var newHumidity = data.list[0].main.humidity;
      var newTemp = data.list[0].main.temp;
      var newCity = data.city.name;
      newSearch = Search.value;
      var newWind = JSON.stringify(data.list[0].wind.speed);

      // var iconOne = newArr[16];
      // var icon1 = newArr[17];
      // var icon2 = newArr[18];
      // var icon3 = newArr[19];
      // var icon4 = newArr[20];
      // var icon5 = newArr[34];

      // icon.innerHTML = `<img src=${pic} />`
      cityName.textContent = "City:" + " " + newCity;
      temp.textContent = "Temperature :" + " " + newTemp + " " + '℉';
      humidity.textContent = "Humidity:" + " " + newHumidity + "%";
      wind.textContent = "Wind Speed:" + " " + newWind + " " + "mph";

      var newArr = [
        
        data.city.name,
        data.list[0].main.humidity,
        data.list[0].main.temp,
        data.list[0].wind.speed,
        data.list[0].dt,

        
        data.city.name,
        data.list[8].main.humidity,
        data.list[8].main.temp,
        data.list[8].wind.speed,
        data.list[8].dt,

        
        data.city.name,
        data.list[16].main.humidity,
        data.list[16].main.temp,
        data.list[16].wind.speed,
        data.list[16].dt,

        
        data.city.name,
        data.list[24].main.humidity,
        data.list[24].main.temp,
        data.list[24].wind.speed,
        data.list[24].dt,

        
        data.city.name,
        data.list[32].main.humidity,
        data.list[32].main.temp,
        data.list[32].wind.speed,
        data.list[32].dt,
      ];

      var miliseconds = data.list[0].dt;
      var dateObject = new Date(miliseconds * 1000).toDateString();

      var icon2 = document.querySelector(".icon2");
      var date2 = document.querySelector(".date2");
      var temp2 = document.querySelector(".temp2");
      var wind2 = document.querySelector(".wind2");
      var cityName2 = document.querySelector(".cityName2");
      var humidity2 = document.querySelector(".humidity2");

      var icon3 = document.querySelector(".icon3");
      var date3 = document.querySelector(".date3");
      var temp3 = document.querySelector(".temp3");
      var wind3 = document.querySelector(".wind3");
      var cityName3 = document.querySelector(".cityName3");
      var humidity3 = document.querySelector(".humidity3");

      var icon4 = document.querySelector(".icon4");
      var date4 = document.querySelector(".date4");
      var temp4 = document.querySelector(".temp4");
      var wind4 = document.querySelector(".wind4");
      var cityName4 = document.querySelector(".cityName4");
      var humidity4 = document.querySelector(".humidity4");

      var icon5 = document.querySelector(".icon5");
      var date5 = document.querySelector(".date5");
      var temp5 = document.querySelector(".temp5");
      var wind5 = document.querySelector(".wind5");
      var cityName5 = document.querySelector(".cityName5");
      var humidity5 = document.querySelector(".humidity5");

      var icon6 = document.querySelector(".icon6");
      var date6 = document.querySelector(".date6");
      var temp6 = document.querySelector(".temp6");
      var wind6 = document.querySelector(".wind6");
      var cityName6 = document.querySelector(".cityName6");
      var humidity6 = document.querySelector(".humidity6");

      icon2.innerHTML = `<img src=${pic2} />`;
      cityName2.textContent = "City:" + " " + newArr[0];
      humidity2.textContent = "Humidity:" + " " + newArr[1]  + "%";
      temp2.textContent = "Temperature:" + " " + newArr[2] + " " + '℉';
      wind2.textContent = "Wind Speed:" + " " + newArr[3];
      date2.textContent =
        "Date:" + " " + new Date(newArr[4] * 1000).toDateString();

      icon3.innerHTML = `<img src=${pic3} />`;
      cityName3.textContent = "City:" + " " + newArr[5];
      humidity3.textContent = "Humidity:" + " " + newArr[6] + "%";
      temp3.textContent = "Temperature:" + " " + newArr[7] + " " + '℉';
      wind3.textContent = "Wind Speed:" + " " + newArr[8];
      date3.textContent =
        "Date:" + " " + new Date(newArr[9] * 1000).toDateString();

      icon4.innerHTML = `<img src=${pic4} />`;
      cityName4.textContent = "City:" + " " + newArr[10];
      humidity4.textContent = "Humidity:" + " " + newArr[11] + "%";
      temp4.textContent = "Temperature:" + " " + newArr[12] + " " + '℉';
      wind4.textContent = "Wind Speed:" + " " + newArr[13];
      date4.textContent =
        "Date:" + " " + new Date(newArr[14] * 1000).toDateString();

      icon5.innerHTML = `<img src=${pic5} />`;
      cityName5.textContent = "City:" + " " + newArr[15];
      humidity5.textContent = "Humidity:" + " " + newArr[16] + "%";
      temp5.textContent = "Temperature:" + " " + newArr[17] + " " + '℉';
      wind5.textContent = "Wind Speed:" + " " + newArr[18];
      date5.textContent =
        "Date:" + " " + new Date(newArr[19] * 1000).toDateString();

      icon6.innerHTML = `<img src=${pic6} />`;
      cityName6.textContent = "City:" + " " + newArr[20];
      humidity6.textContent = "Humidity:" + " " + newArr[21] + "%";
      temp6.textContent = "Temperature:" + " " + newArr[22] + " " + '℉';
      wind6.textContent = "Wind Speed:" + " " + newArr[23];
      date6.textContent =
        "Date:" + " " + new Date(newArr[24] * 1000).toDateString();

      var icon2 = document.querySelector(".icon");
      var date2 = document.querySelector(".date");
      var temp2 = document.querySelector(".temp");
      var wind2 = document.querySelector(".wind");
      var cityName2 = document.querySelector(".cityName2");
      var humidity2 = document.querySelector(".humidity");

      var icon3 = document.querySelector(".icon");
      var date3 = document.querySelector(".date");
      var temp3 = document.querySelector(".temp");
      var wind3 = document.querySelector(".wind");
      var cityName3 = document.querySelector(".cityName3");
      var humidity3 = document.querySelector(".humidity");

      var icon4 = document.querySelector(".icon");
      var date4 = document.querySelector(".date");
      var temp4 = document.querySelector(".temp");
      var wind4 = document.querySelector(".wind");
      var cityName4 = document.querySelector(".cityName4");
      var humidity4 = document.querySelector(".humidity");

      var icon5 = document.querySelector(".icon");
      var date5 = document.querySelector(".date");
      var temp5 = document.querySelector(".temp");
      var wind5 = document.querySelector(".wind");
      var cityName5 = document.querySelector(".cityName5");
      var humidity5 = document.querySelector(".humidity");

      var icon6 = document.querySelector(".icon");
      var date6 = document.querySelector(".date");
      var temp6 = document.querySelector(".temp");
      var wind6 = document.querySelector(".wind");
      var cityName6 = document.querySelector(".cityName6");
      var humidity6 = document.querySelector(".humidity");

      console.log(data.list[0].dt);

      /*var newArr=[
  
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



]; */
    });
}

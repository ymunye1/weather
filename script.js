var icon = document.querySelector('.icon');
var key = 'f5a9cfc86d28ea3cb24220a9752bcf1e'
var city = 'Atlanta'
var requestURL= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`

fetch(requestURL)
  .then(response => response.json())
  .then(data => {

    const iconId = JSON.stringify(data.weather[0]['icon']).replaceAll('"','')
    const sunrise =  new Date(data.sys.sunrise * 1000).toLocaleTimeString();

    const pic = `http://openweathermap.org/img/wn/${iconId}@2x.png`
      console.log(data);
        icon.innerHTML= `<img src=${pic} />`
    console.log(pic);
    console.log(data.sys);
}
  
  );

  
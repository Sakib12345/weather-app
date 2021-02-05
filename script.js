document.getElementById('search').addEventListener(
    'click', () => {
        const location = document.getElementById('inputLocation').value;
        const key = '845d3af148a57fcac391b90678992d28';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`)
        .then(res => res.json())
        .then(data => {
          const weatherIconGet = data.weather[0].icon
          const weatherIcon = `<img src="https://openweathermap.org/img/wn/${weatherIconGet}@2x.png">`
          const temp =  (data.main.temp - 273.15).toFixed(1)
          const location = data.name
          const lead = data.weather[0].main
          document.getElementById('image').innerHTML = weatherIcon;
          document.getElementById('location').innerHTML = location;
          document.getElementById('temp').innerHTML = `${temp}&deg;C`;
          document.getElementById('lead').innerHTML = lead;
        })
    }
)
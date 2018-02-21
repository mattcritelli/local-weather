$(document).ready(function(){
  var geo = navigator.geolocation;
  geo.getCurrentPosition(function(position){
    $.getJSON(`https://fcc-weather-api.glitch.me/api/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}`,
      function(data){
        var location = document.querySelector('.location');
        var farenheit = document.querySelector('.farenheit');
        var celcius = document.querySelector('.celcius');
        var weather = document.querySelector('.weather');
        var img = document.querySelector('img');
        location.innerHTML = `<h2>${data.name}, ${data.sys.country}</h2>`;
        farenheit.innerHTML = `<h2>${Math.floor((data.main.temp * 1.8) + 32)} &deg;F</h2>`;
        celcius.innerHTML = `<h2>${Math.floor(data.main.temp)} &deg;C</h2>`
        weather.innerHTML = `<h2>${data.weather[0].description}</h2>`;
        img.setAttribute('src', data.weather[0].icon);
      }
    ).done(function(){
      $('.loader').fadeOut();
    });
  });

  $('.temp').click(function() {
    $('.farenheit').toggleClass('hidden');
    $('.celcius').toggleClass('hidden');
  });
})

let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature");
    let timezone = document.querySelector(".timezone");
    let country = document.querySelector(".country");
    let icon = document.getElementById("iconImg")
    

window.addEventListener('load', () => {

    let lng;
    let lat;

if (navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position => {
        lng = position.coords.longitude;
        lat = position.coords.latitude;

       const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6f8bb2049de59254e0e55d0cd3e5f058&units=imperial& units=metric`

    getWeather(api);
         
        });


} else {

    alert("Your browser doesn't support geolocation function")
}

})


// Change Location

const btn = document.getElementById("button");

btn.addEventListener('click', () => {

const inputValue = document.querySelector(".input-value").value;

console.log(inputValue);

const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=6f8bb2049de59254e0e55d0cd3e5f058&units=imperial`

getWeather(api)


})


function getWeather(api) {

     fetch(api) 
     .then(response => {
        return response.json();
     })
     .then(data => {
        getData(data)
})
    .catch(error => alert('Please check your spelling'))
}

function getData(data){
const name = data ['name'];
    const temperature = data['main']['temp'];
    const tempdesc = data['weather']['0']['description'];
    const countryName = data['sys']['country'];
    icon.src = 'http://openweathermap.org/img/wn/' + data['weather']['0']['icon'] + '.png'
    timezone.innerHTML = name;
    country.innerHTML = countryName;
    temperatureDescription.innerHTML = tempdesc;
    temperatureDegree.innerHTML = temperature;

    let x = data.weather[0].main;

    console.log(x)

   switch (x) {


    case 'Thunderstorm' : 
    document.body.style.backgroundImage = 'url("img/thunderstorm.jpg")';
    break;

    case 'Drizzle' : 
    document.body.style.backgroundImage = 'url("img/img/drizzle.jpg")';
    break;

    case 'Rain' : 
    document.body.style.backgroundImage = 'url("img/rain.jpg")';
    break;

    case 'Snow' : 
    document.body.style.backgroundImage = 'url("img/snow.jpg")';
    break;

    case 'Mist' : 
    document.body.style.backgroundImage = 'url("img/mist.jpg")';
    break;

    case 'Clear' : 
    document.body.style.backgroundImage = 'url("img/clear.jpg")';
    break;

    case 'Clouds' : 
    document.body.style.backgroundImage = 'url("img/clouds.jpg")';
    break;

   }


}


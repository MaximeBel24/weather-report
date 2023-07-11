const APIKEY = '08a2a11b3b5dcaa699c380e0ca4e3ccf';

let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;



    fetch(url).then( (response) => 
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = data.main.temp + '°';
        document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('#wind').innerHTML =  data.wind.speed + 'km/h';
        document.querySelector('#description').innerHTML = data.weather[0].description;
    })
    ).catch(err => console.log('Erreur : ' + err));
}



document.querySelector('form').addEventListener('submit', function (e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

apiCall('Noiseau');
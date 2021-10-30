const api = {
    key: "cc4ac1bebfd3bba2fdc92989192d9ef1",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }) .then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    // Set city text
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    // Set date text
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`;

    // Changes background color based on tempurature
    let background = document.querySelector('body');

    if (`${Math.round(weather.main.temp)}` < 0) {
        document.body.style.backgroundColor = '#2667ff';
    } else if (`${Math.round(weather.main.temp)}` < 10) {
        document.body.style.backgroundColor = '#26b3ff';
    } else if (`${Math.round(weather.main.temp)}` < 20) {
        document.body.style.backgroundColor = '#26e6ff';
    } else if (`${Math.round(weather.main.temp)}` < 30) {
        document.body.style.backgroundColor = '#26ffe9';
    } else if (`${Math.round(weather.main.temp)}` < 40) {
        document.body.style.backgroundColor = '#26ffb7';
    } else if (`${Math.round(weather.main.temp)}` < 50) {
        document.body.style.backgroundColor = '#fffb26';
    } else if (`${Math.round(weather.main.temp)}` < 60) {
        document.body.style.backgroundColor = '#ffd726';
    } else if (`${Math.round(weather.main.temp)}` < 70) {
        document.body.style.backgroundColor = '#ffaf26';
    } else if (`${Math.round(weather.main.temp)}` < 80) {
        document.body.style.backgroundColor = '#ff8026';
    } else if (`${Math.round(weather.main.temp)}` < 90) {
        document.body.style.backgroundColor = '#ff6026';
    } else if (`${Math.round(weather.main.temp)}` >= 90) {
        document.body.style.backgroundColor = '#ff262d';
    }

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.current .hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`;


    // returns date format as example "Thursday 28 March 2021"
    function dateBuilder(d) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
}

let toggle = document.querySelector('.toggle');
if (toggle.checked == true) {
    console.log("is true");
} else {
    console.log("Is not true");
}

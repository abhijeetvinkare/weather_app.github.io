// to get current month
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let monthName = month[d.getMonth()];
document.getElementById("month").textContent = monthName;

// for getting today date
const date = new Date("July 21, 1983 01:15:00");
let day = d.getDate()
document.getElementById("todayDate").textContent = day;

// to get current day name
var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateObj = new Date();
var weekdayNum = dateObj.getDay();
var weekday = daysArray[weekdayNum];
document.getElementById("day").textContent = weekday;

// to get tommarow day name
var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
var dateObj = new Date();
var weekdayNum = dateObj.getDay();
var weekday = daysArray[weekdayNum + 1];
document.getElementById("tommarow").textContent = weekday;


// for yesterday day name
var daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday','Monday'];
var dateObj = new Date();
var weekdayNum = dateObj.getDay();
var weekday = daysArray[weekdayNum + 2];
document.getElementById("yesterday").textContent = weekday;


// api call for current whether 

function submitLoginForm(event) {
  event.preventDefault();

  const cityName = event.target['cityname'].value;


  // API URL
  const current =
    "https://api.weatherapi.com/v1/current.json?key=43a6478a73e54f1a8b4120309213112&q=" + cityName + "";

  // Calling the API 
  fetch(current)
    .then((response) => {

      const responseCode = response.status;
      if (responseCode === 200) {

        return response.json();
      }
      else {
        console.log("error");
        var myobj = document.getElementById("center")
        myobj.remove();

        document.getElementById("body").innerHTML = "<center><br><br><br><br><br><br><br><br><br><br><br><br><br><br>Error ! No such City ! No City Found ):<br> <br><strong>Refresh for Home<strong></center>"

      }
    })
    .then((data) => {
      const city = data.location.name;
      const temperature = data.current.temp_c;
      const country = data.location.country;
      const condition = data.current.condition.text;

      document.getElementById("five").textContent = city;
      document.getElementById("six").textContent = temperature;
      document.getElementById("seven").textContent = country;
      document.getElementById("eight").textContent = condition;

    });

  // another API to get next two days forcast
  const base =
    "https://api.weatherapi.com/v1/forecast.json?key=43a6478a73e54f1a8b4120309213112&q=" + cityName + "&days=7";

  // Calling the API
  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      const tommarowMorning = data.forecast.forecastday[1].hour[10].temp_c;
      const tommarowNight = data.forecast.forecastday[1].hour[22].temp_c;
      const yesterdayMorning = data.forecast.forecastday[2].hour[10].temp_c;
      const yesterdayNight = data.forecast.forecastday[2].hour[22].temp_c;

      document.getElementById("one").textContent = tommarowMorning;
      document.getElementById("two").textContent = tommarowNight;
      document.getElementById("three").textContent = yesterdayMorning;
      document.getElementById("four").textContent = yesterdayNight;

    });

}


// pre-loading animation 
var preloader = document.getElementById("loading");

function loading(){
  preloader.style.display="none";
}

// pre-loader on search 

document.getElementById("sub").addEventListener("click", function() {
  document.getElementById("loadingg").classList.add("loadingg");
  setTimeout(function(){
    document.getElementById("loadingg").classList.remove("loadingg");
  },700);
})


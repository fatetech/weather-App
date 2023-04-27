let cityName = document.querySelector('.city');
let tempDgree = document.querySelector('.temp h1');
let iconSet = document.querySelector('.icon');
let descriptionInformation = document.querySelector('.description');
let humiditySpan = document.querySelector('.humidity span');
let wind = document.querySelector('.wind span');
let span = document.querySelector('.name');
let btn = document.querySelector('.btn')
let input = document.querySelector(".search-bar")







// let weather = {
//     apikey:"94c0123a1274cd99a51f292d43d05b48",
//     fetchWeather: async (city)=>{
//        const response = await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + city 
//        + "&limit=1&appid=94c0123a1274cd99a51f292d43d05b48")
//         const data = await response.json();
//         this.displayWeather(data)
        
        
//     },
//      displayWeather: function(data){
//          const {name} = data;
//         //  const { icon,description} = data.weather[0];
//         //  const {temp, humidity} = data.main;
//         //  const {speed} = data.wind;
//          console.log(name)

//      }

// } 

 let weather = {
    apikey:"94c0123a1274cd99a51f292d43d05b48",
    
    fetchWeather: city => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        + weather.apikey)
        
.then(response => response.json())
.then(data => weather.displayWeather(data))
 .catch(err =>  console.log(err));
 

    },
     displayWeather: function(data) {
         const {name} = data;
         const {icon,description} = data.weather[0];
         const {temp,humidity} = data.main;
         const {speed} = data.wind;
         console.log(name,icon,description,temp,humidity,speed);
         cityName.innerHTML = "Weather in " + name;
         tempDgree.innerHTML = temp;
         descriptionInformation.innerHTML = description;
         humiditySpan.innerHTML = humidity + "%";
         wind.innerHTML = speed;
         iconSet.src= "http://openweathermap.org/img/wn/" +icon+ ".png";
         document.querySelector(".weather").classList.remove('loading'); 
         document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name + "')" 
        
     },
     
     search:  function() {
       this.fetchWeather(document.querySelector(".search-bar").value);

     }
     
};

 btn.addEventListener("click", function(){
     weather.search();
     input.value= "";
    //  document.querySelector(".loading").classList.remove('loading');
 });
 
 input.addEventListener("keyup", function(e){
     if(e.key === "Enter"){
         weather.search();
         this.value= "";
        //  document.querySelector(".loading").classList.remove('loading');
     }
 })




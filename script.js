let btn=document.querySelector("button");
let input=document.querySelector("input");

let h1=document.querySelector("h1");
let h2=document.querySelector("h2");

let humidity=document.querySelector(".humidity");
let wind=document.querySelector(".wind");

let weatherIcon=document.querySelector(".weather-icon");

const apiKey="4b1eef239ddb541f14c32f319611f89f";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;


async function checkWeather(){
    if(input.value==""){
        alert("Enter any city!!");
    }
    else{
    
    try{
        

        let city=input.value;
        // let city="bangalore";
    let url=apiUrl + city;
    input.value="";
    const response= await fetch( url + `&appid=${apiKey}`);
    var data= await response.json();
    h1.innerText=data.main.temp + '℃';
    h2.innerText=data.name;
    humidity.innerText=data.main.humidity + '%';
    wind.innerText=data.wind.speed + ' KMPH';

        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="snow.png";
        }
        else{
            weatherIcon.src="clouds.png";
         }
        }
    catch(e){

        alert("Cannot find the data of any such place.");
    
    }
}

    
}

checkWeather();

btn.addEventListener("click",checkWeather);

input.addEventListener("keypress",function(e){  
    if(e.key=='Enter'){
        checkWeather();
    }
});



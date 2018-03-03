var temp;
var humidity;
var wind;
var weather;
var city;

function handleSubmit(){
	event.preventDefault();
	city = document.getElementById("text").value;
	getWeatherData(city);
}

//Please do not abuse API key! <3
function getWeatherData(city){
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b31da424718449ee875c923f25fdc37f`)
		.then((resp) => resp.json())
		.then(function(data){
			temp = data.main.temp;
			humidity = data.main.humidity;
			wind = data.wind.speed;
			weather = data.weather[0].main;
		})
		.then(function(){
			renderData();
		})
}

function renderData(){
	document.getElementById("info").innerHTML = "";
	document.getElementById("city").textContent = ("Weather Forecast for " + city);
	createDiv("Temperature(F) is " + temp.toString());
	createDiv("Humidity is " + humidity.toString());
	createDiv("Wind(Mph) is " + wind.toString());
	createDiv("Weather: " + weather);
}

function createDiv(content){
	var newDiv = document.createElement("div");
	var newContent = document.createTextNode(content);
	newDiv.appendChild(newContent);
	newDiv.id = "data-child";
	document.getElementById("info").append(newDiv);
	
}


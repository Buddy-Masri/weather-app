let searchResult = document.getElementById('search-bar')
let searchButton = document.getElementById('search-button')
let cityName = document.getElementById('box-1-value')
let WeatherStaus = document.getElementById('box-2-value')
let temp = document.getElementById('box-3-main')
let minTemp = document.getElementById('box-3-min')
let maxTemp = document.getElementById('box-3-max')

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2d3c54a101msh8b6b1b88083dac9p1879dbjsnd483a45ba7b0',
// 		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
// 	}
// };


// const citySearch = () => {
// 	fetch(`https://openweather43.p.rapidapi.com/weather?q=${searchResult.value}&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=metric`, options)
// 		.then(response => response.json())
// 		.then(json => {
// 			console.log(json)
// 			cityName.innerHTML = json.name
// 			WeatherStaus.innerHTML = json.weather[0].main
// 			temp.innerText = `Temp: ${json.main.temp}℃`
// 			minTemp.innerText = `Min Temp: ${json.main.temp_min}℃`
// 			maxTemp.innerText = `Max Temp: ${json.main.temp_max}℃`
// 		})
// 	searchResult.value = null
// }

// searchButton.onclick = () => citySearch()

// const citySearch = async () => {
// 	let response = await fetch(`https://openweather43.p.rapidapi.com/weather?q=${searchResult.value}&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=metric`, options)
// 	let json = await response.json()
// 		console.log(json)
// 		searchResult.value = null
// 		cityName.innerHTML = json.name
// 		WeatherStaus.innerHTML = json.weather[0].main
// 		temp.innerText = `Temp: ${json.main.temp}℃`
// 		minTemp.innerText = `Min Temp: ${json.main.temp_min}℃`
// 		maxTemp.innerText = `Max Temp: ${json.main.temp_max}℃`
// }

// searchButton.onclick = () => citySearch()


let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
let URL = "https://api.openweathermap.org/data/2.5/weather";



const citySearch = async () => {
	try{
	let FULL_URL = `${URL}?q=${searchResult.value}&appid=${API_KEY}&units=metric`;
	let response = await fetch(FULL_URL)
	let json = await response.json()
		console.log(json)
		searchResult.value = null
		cityName.innerHTML = json.name
		WeatherStaus.innerHTML = json.weather[0].main
		temp.innerText = `Temp: ${json.main.temp}℃`
		minTemp.innerText = `Min Temp: ${json.main.temp_min}℃`
		maxTemp.innerText = `Max Temp: ${json.main.temp_max}℃`
	}catch (error){
		cityName.innerHTML = 'Error'
		WeatherStaus.innerHTML = '---'
		temp.innerText = `Temp: ---`
		minTemp.innerText = `Min Temp: ---`
		maxTemp.innerText = `Max Temp: ---`
	}

}

searchButton.onclick = () => citySearch()


// const getWeatherData = (city) => {
// 	const URL = "https://api.openweathermap.org/data/2.5/weather";
// 	const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
// 	const weatherPromise = fetch(FULL_URL)
// 	return weatherPromise.then(response =>
// 		response.json())
// }

// showWeatherData = (weatherData) => {
// 	cityName.innerHTML = weatherData.name
// 	WeatherStaus.innerHTML = weatherData.weather[0].main
// 	temp.innerText = `Temp: ${weatherData.main.temp}℃`
// 	minTemp.innerText = `Min Temp: ${weatherData.main.temp_min}℃`
// 	maxTemp.innerText = `Max Temp: ${weatherData.main.temp_max}℃`
// }

// const searchCity = () => {
// 	const city = searchResult.value
// 	getWeatherData(city)
// 		.then(json => 
// 			showWeatherData(json))
// 			.catch(error=>{
// 				console.log("Something happend");
// 			})
// }


// searchButton.onclick = () => searchCity()
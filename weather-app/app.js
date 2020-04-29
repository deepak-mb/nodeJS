const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ff471ca924f4b52361b98890db52eb81&query=Bangalore&units=f';

// request({ url: url, json: true }, (error, response) => {
// 	// console.log(response.body.current);
// 	const { current } = response.body;
// 	console.log(`${current.weather_descriptions}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} out.`)
// });

//Geocoding
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGVlcGFrbWIiLCJhIjoiY2s5a3NwMm5oMDFhejNvcnZxNjFpN3lqdSJ9.H1R8rPHAN8S60uiDmFEfEA&limit=1';
request({ url: geoUrl, json: true }, (error, response) => {
	const { features } = response.body;
	console.log(`Latitude: ${features[0].center[1]}. Longitude: ${features[0].center[0]}`)
});

const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=ff471ca924f4b52361b98890db52eb81&query=${latitude},${longitude}&units=f`

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			console.log('Unable to connect to weather service.')
		} else if (response.body.error) {
			console.log('Unable to find location.')
		} else {
			const { current } = response.body;
			console.log(`${current.weather_descriptions}. It is currently ${current.temperature} degrees out. It feels like ${current.feelslike} out.`);
		}
	});
}

module.exports = forecast;
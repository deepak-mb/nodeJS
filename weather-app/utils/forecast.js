const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=ff471ca924f4b52361b98890db52eb81&query=${latitude},${longitude}&units=f`

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			console.log('Unable to connect to weather service.')
		} else if (body.error) {
			console.log('Unable to find location.')
		} else {
			const { weather_descriptions, temperature, feelslike } = body.current;
			console.log(`${weather_descriptions}. It is currently ${temperature} degrees out. It feels like ${feelslike} out.`);
		}
	});
}

module.exports = forecast;
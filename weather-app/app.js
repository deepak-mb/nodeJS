const yargs = require('yargs')

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
	console.log(`Please provide an address.`);
} else {
	geocode(address, (error, data) => {
		if (error) {
			return console.log('Error: ', error);
		} else {
			console.log(data.location);
		}
		forecast(data.latitude, data.longitude, (error, forecastData) => {
			if (error) {
				return console.log('Error', error);
			} else {
				console.log(forecastData);
			}
		});
	});
}
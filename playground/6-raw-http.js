const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=ff471ca924f4b52361b98890db52eb81&query=40,-75,&units=f`;

const request = http.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data = data + chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log(error);
})

request.end();
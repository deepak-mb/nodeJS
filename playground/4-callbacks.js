setTimeout(() => {
	console.log(' Two seconds are up.')
}, 2000)


const geoCode = (address, callback) => {
	const data = {
		latidude: 0,
		logitude: 1
	}
};

geoCode('philadephia');



const add = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 2000)
};

add(1, 4, (sum) => {
	console.log(sum) // Should print: 5
});
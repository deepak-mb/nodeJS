const doWorkCallBack = (callback) => {
	setTimeout(() => {
		callback('THis is my error', undefined)
	}, 2000)
}

doWorkCallBack((error, result) => {
	if (error) {
		return console.log(error)
	} else {
		console.log(result)
	}
})
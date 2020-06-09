const mongoose = require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ecf2cb117a41c3b67abf755')
// 	.then((task) => {
// 		console.log(task)
// 		return Task.countDocuments({ completed: false })
// 	})
// 	.then(count => {
// 		console.log(count)
// 	})
// 	.catch(e => {
// 		console.log(e)
// 	})

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount('5ecf2cd89675ef3b956285f0')
	.then(res => {
		console.log(res)
	})
	.catch(e => {
		console.log(e)
	})
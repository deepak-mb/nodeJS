require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ecf2d6ab6f9f83c093c2823

// User.findByIdAndUpdate('5ecf2d6ab6f9f83c093c2823', { age: 1 })
// 	.then((user) => {
// 		console.log(user)
// 		return User.countDocuments({ age: 1 })
// 	})
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(e => {
// 		console.log(e)
// 	})

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age: age })
	const count = await User.countDocuments({ age: age })
	return count
}

updateAgeAndCount('5ecf2d6ab6f9f83c093c2823', 2)
	.then(count => {
		console.log(count)
	})
	.catch(e => {
		console.log(e)
	})
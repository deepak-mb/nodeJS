const express = require('express')

require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3010

// app.use((req, res, next) => {
// 	if (req.method === 'GET') {
// 		res.send('GET requests are disabled')
// 	} else { 
// 		next()
// 	}
// })

// app.use((req, res, next) => {
// 	res.status(503).send('Requests are disabled')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
	// const task = await Task.findById('5f028f9f4e4a0b36a89c40f3')
	// await task.populate('owner').execPopulate()
	// console.log(task.owner)

	const user = await User.findById('5f028d38f6852d3394561cc3')
	await user.populate('tasks').execPopulate()
	console.log(user.tasks)
}

main()
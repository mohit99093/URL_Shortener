const express = require('express')
const path = require('path')
const app = express()
const Routes = require('./routes/route')

const port = process.env.PORT || 6006

app.use(express.json())
app.use(Routes)

app.use(express.static(path.join(__dirname, 'public')))

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')))

	// Handle React routing, return all requests to React app
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
	})
}

app.get('/', (req, res) => {
	res.send('Hello This is Shorten URL!')
})

app.listen(port, () => {
	console.log('Server is connected at ' + port)
})

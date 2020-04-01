const express = require('express')
const app = express()
const path = require('path')

// Set the static files folder
app.use(express.static('static'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.get('/blog', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/blog.html'))
})

app.listen(3000, function () {
  console.log('Running on http://localhost:3000')
})

console.log(__dirname)

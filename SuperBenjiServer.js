const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json() , cors())

app.get('/', (req, res) => {
    res.send('Welcome to Nodejs API Project')
})

app.get('/hello' , (req, res) => {
    res.send('Hello World!!')
})

app.listen(port, () => console.log('server is up and running ${port}'))

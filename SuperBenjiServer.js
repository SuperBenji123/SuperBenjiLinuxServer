const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 8080
const app = express()
const Nylas = require('nylas')

const nylasConfig = {
    clientId: 'fdb5107e-c36b-4858-a105-a68a7198904f',
    callbackURI:'https://superbenji.softr.app/',
    apiKey: 'nyk_v0_oGiRYIEq6FRN5Z0nE2U5nkzpBq625teIJSt4aXg1mIaZDbLpmdeGcYidYTPLuOmt',
    apiURI: 'https://api.eu.nylas.com'
}

Nylas.config({
    clientId: nylasConfig.clientId,
    clientSecret: nylasConfig.apiKey,
    apiServer: nylasConfig.apiURI,
})

app.use(bodyParser.json() , cors())

app.get('/nylas/auth', (req, res) => {
    const authURL = nylas.auth.urlForOAuth2({
        clientId : nylasConfig.clientId,
        redirectUri: nylasConfig.callbackURI,
    })

    console.log('Redirecting to :', authURL)
    res.redirect(authURL)
})

app.get('/', (req, res) => {
    res.send('Welcome to Nodejs API Project')
})

app.get('/hello' , (req, res) => {
    res.send('Hello World!!')
})

app.listen(port, () => console.log('server is up and running ${port}'))

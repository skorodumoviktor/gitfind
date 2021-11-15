const axios = require('axios')
const proxy = require('express-http-proxy')
const express = require('express')
const path = require('path')
const { CLIENT_ID, CLIENT_SECRET } = require('./config')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

app.use(
  '/api/graphql',
  proxy('https://api.github.com/graphql', {
    proxyReqPathResolver: () => {
      return '/graphql'
    },
  }),
)

// returns GitHub access token
app.post('/api/authenticate', (req, res) => {
  const { code } = req.body

  const params = new URLSearchParams()
  params.set('client_id', CLIENT_ID)
  params.set('client_secret', CLIENT_SECRET)
  params.set('code', code)

  axios
    .post(`https://github.com/login/oauth/access_token?${params}`, {
      Headers: {
        Accept: 'application/json',
      },
    })
    .then((response) => {
      const params = new URLSearchParams(response.data)
      const accessToken = params.get('access_token')
      return res.status(200).json(accessToken)
    })
    .catch((error) => {
      return res.status(400).json(error)
    })
})

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))

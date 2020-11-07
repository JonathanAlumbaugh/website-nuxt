// const axios = require('axios')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

const SECRET_KEY = '6LcvAOAZAAAAAL--mWaIJlkBpimkV0U5A-72bNyF'

app.use([bodyParser.json(), cors()])
app.options('*', cors())
app.post('/recaptcha', async (req, res) => {
  console.log('mid body', req.body)
  console.log('test', req)

  try {
    const { host } = req.headers
    const { token } = req.body

    res = await this.$axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}&remoteip=${host}`,
      headers,
    )
  } catch (e) {
    console.log('serverMiddleware error:', e)
    res = e
  }
})

module.exports = app

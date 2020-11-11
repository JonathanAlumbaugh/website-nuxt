const app = require('express')()
const bodyParser = require('body-parser')
import axios from 'axios'

app.use(bodyParser.json())

app.post('/recaptcha', async (req, res) => {
  try {
    const { RECAPTCHA_SECRET_KEY: secretKey } = process.env
    const { host } = req.headers
    const { token } = req.body

    if (!token) {
      const errorMessage = 'No token!'
      res.status(400).send(errorMessage)
      throw errorMessage
    }

    if (!secretKey) {
      const errorMessage = 'No secret key env variable!'
      res.status(400).send(errorMessage)
      throw errorMessage
    }

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    )

    res.send(data)
  } catch (e) {
    res.status(500).send(`
      <p>ReCaptcha error:</p>
      <pre>${e}</pre>
    `)
  }
})

module.exports = app

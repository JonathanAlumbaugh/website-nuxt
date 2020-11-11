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
      res.status(400).send('No token!')
      throw 'No token!'
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

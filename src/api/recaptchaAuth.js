const app = require('express')()
const bodyParser = require('body-parser')
import axios from 'axios'

const SECRET_KEY = '6LcvAOAZAAAAAL--mWaIJlkBpimkV0U5A-72bNyF'

app.use(bodyParser.json())

app.post('/recaptcha', async (req, res) => {
  try {
    const { host } = req.headers
    const { token } = req.body

    if (!token) {
      res.status(400).send('No token!')
      throw 'No token!'
    }

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`,
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

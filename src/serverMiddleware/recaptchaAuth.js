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

// export default {
//   path: '/recaptcha',

//   async handler(req, res) {
//     let headers = {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//     }

//     console.log('middleware req', req)
//     console.log('middleware headers', req.headers)
//     console.log('middleware body', req.body)

//     try {
//       let ip = req.headers.host
//       let token = req.body.token

//       res = await this.$axios.post(
//         `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}&remoteip=${ip}`,
//         headers,
//       )
//     } catch (e) {
//       res = e
//       console.log('serverMiddleware error:', e)
//     }
//   },
// }

module.exports = app

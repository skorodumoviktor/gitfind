const dotenv = require('dotenv')

dotenv.config()

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

module.exports = {
  CLIENT_ID,
  CLIENT_SECRET,
}

const express = require('express')
const connection = require('../../../../other/quest-express-01/src/config')
const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

router.get('/api/contact', (req, res) => {
    connection.query("SELECT * FROM Contact ", (err, results) => {
        if (err) {
          res.status(500).send("Error retrieving data");
        } else {
          res.status(200).json(results);
        }
    })
  })
  module.exports = router
const express = require('express')
const router = express.Router()
const processCtl = require('../controllers/process')

/* GET users listing. */
router.get('/', (req, res, next) => {
  processCtl.callCLI((err, code) => {
    if (err) {
      res.status(500)
      next()
    }
    res.send(`callCLI ${code}`)
  })
})

module.exports = router

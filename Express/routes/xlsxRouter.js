const router = require('express').Router()

const {
  multerXLSX
} = require('../middlewares')

const {
  XLSXController
} = require('../controllers')

router.post('/', multerXLSX, XLSXController.uploadAndParseXLSX)

module.exports = router

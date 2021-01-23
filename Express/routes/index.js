const router = require('express').Router()

const invoiceRouter = require('./invoiceRouter')
const xlsxRouter = require('./xlsxRouter')

router.use('/invoice', invoiceRouter)
router.use('/xlsx', xlsxRouter)

module.exports = router
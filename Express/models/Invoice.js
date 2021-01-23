const { model } = require('mongoose')
const { invoiceSchema } = require('../schemas')

const Invoice = model('Invoice', invoiceSchema)

module.exports = Invoice
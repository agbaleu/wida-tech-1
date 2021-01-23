const { model } = require('mongoose')
const { productSchema } = require('../schemas')

const Product = model('Product', productSchema)

module.exports = Product
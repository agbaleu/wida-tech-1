const { Schema } = require('mongoose')

const productSchema = new Schema({
  item: {
    type: String,
    required: [true, 'Item Name cannot be empty!'],
    minlength: 5
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity cannot be empty!'],
    min: 1
  },
  'total cogs': {
    type: Number,
    required: [true, 'Total Cost of Goods Sold cannot be empty!'],
    min: 0
  },
  'total price': {
    type: Number,
    required: [true, 'Total Price Sold cannot be empty!'],
    min: 0
  },
  'Invoice no': {
    type: Schema.Types.ObjectId,
    ref: 'Invoice',
    required: [true, 'Invoice no cannot be empty!']
  }
}, { timestamps: true })

module.exports = productSchema

const { Schema } = require('mongoose')

const invoiceSchema = new Schema({
  'invoice no': {
    type: String,
    required: [true, 'Invoice Number cannot be empty!'],
    min: 1
  },
  date: {
    type: Date,
    required: [true, 'Date cannot be empty!']
  },
  customer: {
    type: String,
    required: [true, 'Customer Name cannot be empty!'],
    minlength: 2
  },
  salesperson: {
    type: String,
    required: [true, 'Sales Person Name cannot be empty!'],
    minlength: 2
  },
  'payment type': {
    type: String,
    enum: ['CASH', 'CREDIT']
  },
  notes: {
    type: String,
    minlength: 5
  },
  productsSold: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product sold cannot be empty!']
  }]
}, { timestamps: true })

module.exports = invoiceSchema

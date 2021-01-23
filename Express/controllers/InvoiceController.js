const {
  Invoice
} = require('../models')

module.exports = class InvoiceController {
  static async readInvoice(req, res, next) {
    try {
      const allInvoice = await Invoice.find({})

      res.status(200).json(allInvoice)
    } catch (err) {
      next(err)
    }
  }

  static async createInvoice(req, res, next) {
    try {
      const newInvoice = new Invoice(req.body)

      const result = await newInvoice.save()

      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  static async updateInvoice(req, res, next) {
    try {
      const { id } = req.params

      await Invoice.updateOne({ 'invoice id': id }, req.body, { upsert: false })

      res.status(200).json({ message: 'Successfully edit Invoice with number ' + id })
    } catch (err) {
      next(err)
    }
  }

  static async deleteInvoice(req, res, next) {
    try {
      const { id } = req.params

      await Invoice.deleteOne({ 'invoice id': id })

      res.status(200).json({ message: 'Successfully delete Invoice with number ' + id })
    } catch (err) {
      next(err)
    }
  }
}

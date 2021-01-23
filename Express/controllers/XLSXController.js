const {
  readXLSX,
  convertXLSXToJSON
} = require('../helpers')

const {
  Invoice,
  Product
} = require('../models')

module.exports = class XLSXController {
  static async uploadAndParseXLSX(req, res, next) {
    try {
      const { buffer } = req.file
      const {
        'invoice': invoiceXLSX,
        'product sold': productSoldXLSX
      } = readXLSX(buffer)

      const invoices = convertXLSXToJSON(invoiceXLSX)
      const productsSold = convertXLSXToJSON(productSoldXLSX)

      for(let i = 0; i < invoices.length; i++) {
        const newInvoice = new Invoice(invoices[i])
        await newInvoice.save()
      }

      for(let i = 0; i < productsSold.length; i++) {
        const newProductSold = new Product(productsSold[i])
        await newProductSold.save()
      }

      res.status(200).json('Successfully upload XLSX file')
    } catch (err) {
      next(err)
    }
  }
}

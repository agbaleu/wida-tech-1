const router = require('express').Router()

const {
  InvoiceController: {
    createInvoice,
    readInvoice,
    updateInvoice,
    deleteInvoice
  }
} = require('../controllers')

// * Create API Request
router.post('/', createInvoice)

// * Read API Request
router.get('/', readInvoice)

// * Update API Request
router.put('/:id', updateInvoice)

// * Delete API Request
router.delete('/:id', deleteInvoice)

module.exports = router
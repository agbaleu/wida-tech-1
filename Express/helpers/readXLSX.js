const XLSX = require('xlsx')

module.exports = (buffer) => {
  return XLSX.read(buffer, { type: 'buffer' }).Sheets
}

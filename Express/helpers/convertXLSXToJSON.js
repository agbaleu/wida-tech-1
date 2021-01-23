module.exports = (sheetsXLSX) => {
  const result = []

  const sheetsKeys = Object.keys(sheetsXLSX)

  const ref = sheetsXLSX['!ref'].split(':')[1][0]

  let temp = {}

  for(let i = 1; i < sheetsKeys.length - 1; i++) {
    const keys = sheetsKeys[i]
    const prefix = keys[0]

    const x = keys.split('')
    x.shift()
    const target = x.join('')


    if(target != '1') {
      temp[sheetsXLSX[`${prefix}1`]['w']] = sheetsXLSX[keys]['w']
    }

    if(sheetsXLSX[`${prefix}1`]['w'] == sheetsXLSX[`${ref}1`]['w']) {
      result.push(temp)      
      temp = {}
    }
  }

  result.shift()

  return result
}

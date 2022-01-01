const crypto = require('crypto')
const kpow = require('./')

const hash = crypto.createHash('ripemd160').update("Hello World").digest('hex')
const generatedPow = kpow.doWork(hash)
console.log(`Generated Work: ${generatedPow}\nIs valid: ${kpow.checkWork(hash, generatedPow)}`)
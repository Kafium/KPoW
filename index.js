const crypto = require('crypto')

function doWork (hash) {
  let nonce = 0
  let findingHash = crypto.createHash('ripemd160').update(hash + nonce).digest('hex')
  while (findingHash.substr(0, 2) !== '00') {
    findingHash = crypto.createHash('ripemd160').update(hash + nonce).digest('hex')
    nonce += 1
  }
  return nonce
}

function checkWork (hash, nonce) {
  const work = crypto.createHash('ripemd160').update(hash + nonce).digest('hex')
  return (work.substr(0, 2) === '00')
}

module.exports = {
  doWork,
  checkWork
}
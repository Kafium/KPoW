const crypto = require('crypto')

function doWork (hash) {
  let work = crypto.randomBytes(5).toString('hex')
  let findingHash = crypto.createHash('ripemd160').update(hash + work).digest('hex')
  while (findingHash.substring(0, 4) !== '0000') {
    work = crypto.randomBytes(5).toString('hex')
    findingHash = crypto.createHash('ripemd160').update(hash + work).digest('hex')
  }
  return work
}

function checkWork (hash, work) {
  if (work.length !== 10) return false
  const workHash = crypto.createHash('ripemd160').update(hash + work).digest('hex')
  return (workHash.substring(0, 4) === '0000')
}

module.exports = {
  doWork,
  checkWork
}

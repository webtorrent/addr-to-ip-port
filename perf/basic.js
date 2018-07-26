const addrToIPPort = require('../')
const util = require('./util')
const suite = util.suite()

const addrs = []
for (let i = 1; i < 65536; i++) {
  addrs.push(`127.0.0.1:${i}`)
}

suite
  .add('addr-to-ip-port', () => {
    addrToIPPort.reset()
    let ipPort
    for (var i = 0, len = addrs.length; i < len; i++) {
      ipPort = addrToIPPort(addrs[i])
    }
    for (var i = 0, len = addrs.length; i < len; i++) {
      ipPort = addrToIPPort(addrs[i])
    }
  })

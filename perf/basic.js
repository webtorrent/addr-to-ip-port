const addrToIPPort = require('../')
const util = require('./util')
const suite = util.suite()

// Around 262k addresses to cause 2 resets
const addrs = []
for (let i = 1; i < 65536; i++) {
  addrs.push(`127.0.0.1:${i}`)
  addrs.push(`1.1.1.1:${i}`)
  addrs.push(`8.8.8.8:${i}`)
  addrs.push(`8.8.4.4:${i}`)
}

suite
  .add('addr-to-ip-port', () => {
    addrToIPPort.reset()
    let ipPort
    for (let i = 0, len = addrs.length; i < len; i++) {
      // First pass no cache
      ipPort = addrToIPPort(addrs[i])
      // Should be in cache immediately
      ipPort = addrToIPPort(addrs[i])
    }
    // Repeat after resets
    for (let i = 0, len = addrs.length; i < len; i++) {
      // First pass with cache on 100k keys
      ipPort = addrToIPPort(addrs[i])
      // Should be in cache immediately
      ipPort = addrToIPPort(addrs[i])
    }
  })

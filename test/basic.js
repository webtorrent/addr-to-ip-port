const addrToIPPort = require('../')
const test = require('tape')

test('Basic tests', t => {
  t.deepEqual(addrToIPPort('1.2.3.4:1000'), [ '1.2.3.4', 1000 ])
  t.deepEqual(addrToIPPort('2.3.4.5:1000'), [ '2.3.4.5', 1000 ])
  t.deepEqual(addrToIPPort('[2a00:1450:4008:801::1011]:80'), [ '2a00:1450:4008:801::1011', 80 ])
  t.deepEqual(addrToIPPort('webtorrent.io:80'), [ 'webtorrent.io', 80 ])

  // test that cache works correctly
  const data1 = addrToIPPort('1.2.3.4:2000')
  const data2 = addrToIPPort('1.2.3.4:2000')
  t.deepEqual(data1, [ '1.2.3.4', 2000 ])
  t.equal(data1, data2) // got literally the same object

  t.end()
})

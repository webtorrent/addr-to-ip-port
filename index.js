var ADDR_RE = /^\[?([^\]]+)\]?:(\d+)$/ // ipv4/ipv6/hostname + port

var cache = {}

module.exports = function addrToIPPort (addr) {
  if (!cache[addr]) {
    var m = ADDR_RE.exec(addr)
    if (!m) throw new Error('invalid addr')
    cache[addr] = [ m[1], Number(m[2]) ]
  }
  return cache[addr]
}

module.exports.reset = function () {
  cache = {}
}

var cache = {}

module.exports = function addrToIPPort (addr) {
  if (!cache[addr]) {
    var m, host, port
    if ((m = addr.match(/^\[([0-9a-f:]+)\]:(\d+)$/)) ||
        (m = addr.match(/^([0-9\.]+):(\d+)$/))) {
      host = m[1]
      port = Number(m[2])
    } else {
      throw new Error('Invalid IP/Port: ' + addr)
    }
    cache[addr] = [ host, port ]
  }
  return cache[addr]
}

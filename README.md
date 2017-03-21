# addr-to-ip-port [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/addr-to-ip-port/master.svg
[travis-url]: https://travis-ci.org/feross/addr-to-ip-port
[npm-image]: https://img.shields.io/npm/v/addr-to-ip-port.svg
[npm-url]: https://npmjs.org/package/addr-to-ip-port
[downloads-image]: https://img.shields.io/npm/dm/addr-to-ip-port.svg
[downloads-url]: https://npmjs.org/package/addr-to-ip-port
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

#### Convert an "address:port" string to an array [address:string, port:number]

[![browser support](https://ci.testling.com/feross/addr-to-ip-port.png)](https://ci.testling.com/feross/addr-to-ip-port)

Uses a cache to prevent excessive array allocations and GC.

Works in node and the browser. This module is used by [WebTorrent](http://webtorrent.io)!

### install

```
npm install addr-to-ip-port
```

### usage

```js
var addrToIPPort = require('addr-to-ip-port')

addrToIPPort('1.2.3.4:8000') //=> ['1.2.3.4', 8000]
addrToIPPort('1.2.3.4:8000') //=> ['1.2.3.4', 8000] (returns the cached object)
```

### license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).

const benchmark = require('benchmark')

exports.suite = () => {
  const suite = new benchmark.Suite()
  process.nextTick(() => {
    suite
      .on('error', event => {
        console.error(event.target.error.stack)
      })
      .on('cycle', event => {
        console.log(String(event.target))
      })
      // .on('complete', function () {
      //   console.log('Fastest is ' + this.filter('fastest').pluck('name'))
      // })
      .run({ async: true })
  })
  return suite
}

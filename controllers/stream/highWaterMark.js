const fs = require('fs')
const { showMemoryUsage } = require('../../tools/memory')

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  try {
    const stream = fs.createReadStream(__dirname + '/data.txt', {
      highWaterMark: 10000000,
      encoding: 'utf8'
    })

    for await (const data of stream) {
      showMemoryUsage()
      console.log(`Read byteLength:${Buffer.byteLength(data)}`)
    }
  } catch (err) {
    console.log(err)
  }
})()

const fs = require('fs')
const { showMemoryUsage } = require('../../tools/memory')

fs.createReadStream(`${__dirname}/data.txt`, 'utf8')
  .on('data', data => {
    // ストリーム経由で到着したデータ量
    console.log('Read byteLength:', Buffer.byteLength(data))
    showMemoryUsage()
  }).on('end', () => {
    console.log('end.')
  })

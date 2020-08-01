const fs = require('fs')
const zlib = require('zlib')
const { showMemoryUsage } = require('../../tools/memory')

const file = process.argv[2]

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(`${file}.gz`))
  .on('finish', () => {
    showMemoryUsage()
    console.log('File successfully compressed')
  })

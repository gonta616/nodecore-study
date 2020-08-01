const fs = require('fs')
const zlib = require('zlib')
const { showMemoryUsage } = require('../../tools/memory')

const file = process.argv[2]

// eslint-disable-next-line handle-callback-err
fs.readFile(file, (err, buffer) => {
  showMemoryUsage()
  // eslint-disable-next-line handle-callback-err
  zlib.gzip(buffer, (err, buffer) => {
    showMemoryUsage()
    // eslint-disable-next-line handle-callback-err
    fs.writeFile(`${file}.gz`, buffer, err => {
      showMemoryUsage()
      console.log('File successfully compressed')
    })
  })
})

const fs = require('fs')

// メモリ使用量を出力する
function showMemoryUsage () {
  const used = process.memoryUsage()
  const message = []
  for (const key in used) {
    message.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100}MB`)
    console.log('Memory: ', message.join(', '))
  }
}

showMemoryUsage()
fs.readFile(`${__dirname}/data.txt`, 'utf8', (err, data) => {
  showMemoryUsage()
})

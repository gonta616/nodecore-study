const spawn = require('child_process').spawn

/**
 * NodeからCLIを呼び出す
 * @param {*} cb コールバック
 */
const callCLI = (cb) => {
  const pythonProcess = spawn('python', [`${process.cwd()}/controllers/script.py`, 'https://www.google.com/?hl=ja'])
  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })

  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    cb(null, code)
  })
}

module.exports = {
  callCLI
}

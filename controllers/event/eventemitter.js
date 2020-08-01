const { EventEmitter } = require('events')

const ev = new EventEmitter()

// 'eventName' のイベントを補足する
ev.on('eventName', (data) => {
  console.log('on', data)
})

ev.once('eventName', (data) => {
  console.log('once', data)
})

ev.emit('eventName', 1234)
ev.emit('eventName', 2345)
ev.emit('eventName', 3456)
ev.emit('eventName', 4567)

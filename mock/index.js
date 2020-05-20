import Mock from 'mockjs'

// 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
Mock.setup({
  timeout: '3000-6000'
})
const files = require.context('./', true, /\.js/)
files.keys().map(item => {
  if (item !== './index.js') {
    const file = files(item).default
    for (var key in file) {
      const arr = key.split('|')
      const handle = file[key]
      console.log(arr, handle)
      console.log(new RegExp(arr[1]))
      Mock.mock(new RegExp(arr[1]), arr[0], handle)
    }
  }
})

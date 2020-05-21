import Mock from 'mockjs'

// 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。
Mock.setup({
  timeout: '200-600'
})

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('./', true, /\.js$/)

let configArray = []

files.keys().forEach(key => {
  if (key !== './index.js') {
    configArray = configArray.concat(files(key).default)
  }
})

configArray.forEach(item => {
  for (const [path, target] of Object.entries(item)) {
    const protocal = path.split('|')
    Mock.mock(new RegExp('^' + protocal[1]), protocal[0], target)
  }
})

import { Random } from 'mockjs'

export default {
  'get|/order/getlist': {
    code: 0,
    message: 'success',
    'list|10-20': [{
      'id|+1': 1,
      title: Random.cword(5, 7),
      time: Random.date(),
      url: Random.image()
    }]
  }
}

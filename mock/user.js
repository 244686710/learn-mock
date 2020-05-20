export default {
    'get|/user': 
        {
            code: 0,
            message: 'success',
            'list|1-10': [{
                'id|+1': 1,//属性 id 是一个自增数，起始值为 1，每次增 1
                name: 'yuyd',
                'email': '@EMAIL'//随机邮箱地址
            }]
    },
    'post|/register' (options) {
        return {
            ...options,
            code: 1,
            status: 400,
            message: 'error'
        }
    }
    
}
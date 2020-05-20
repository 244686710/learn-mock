import Mork from 'mockjs';
const files = require.context('./', true, /\.js/)

files.keys().map(item => {
    if (item !== './index.js') {
        const file = files(item).default
        for (var key in file) {
            let arr = key.split('|')
            const handle = file[key]
            console.log(arr, handle)
            console.log(new RegExp(arr[1]))
            Mork.mock(new RegExp(arr[1]), arr[0], handle)
        }
    }
})
<template>
  <div class="wrap">
    <ul>
      <li class="item" v-for="item in list" :key="item.id">
        <img :src="item.url" alt="">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    // axios.get('/user').then(res => {
    //   console.log(res)
    // }).catch(err =>{
    //   throw new Error(err)
    // })

    // axios.post('/register', {user: 'yuyd', pwd: 12121}).then(res => {
    //   console.log(res)
    // })

    axios.get('/order/getlist').then(res => {
      this.$data.list = res.data.list
      console.log(this.list)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .item img {
  width: 120px;
  height: 60px;
} */
</style>

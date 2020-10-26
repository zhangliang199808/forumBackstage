<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
// import { mockXHR } from 'mock'
import { mapGetters } from 'vuex'
// import Axios from 'axios'
import request from '../../utils/request'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data() {
    return {
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getNewsList() {
      console.log(123)
      request({
        method: 'get',
        url: '/mock/news',
        success: (res) => {
          console.log(res,'mock返回')
        }
      })
      // request.get('/mock/news').then(res => { // url即在mock.js中定义的
      //   console.log(res.data) // 打印一下响应数据
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

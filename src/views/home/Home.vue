<template>
<div>
  <!-- navbar导航条 -->
  <nav-bar class="home-nav">
    <template v-slot:center>首页</template>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
</div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata} from '../../network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper
  },
  data(){
    return {
      banners: [],
      recommends:[]
    }
  },
  created(){
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }

}
</script>

<style>
.home-nav {
  background-color: #f66a8d;
  color: #fff;
}
</style>
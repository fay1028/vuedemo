<style>
</style>
<template>
<div class='all-page-container'>
  <login v-if='loginShowFlag' :loginshowflag.sync='loginShowFlag'></login>
  <div class='public-content' v-if='!loginShowFlag'>恭喜你登录成功
    <div class='menu'>
      <a v-link='"/home"'>搜索页</a>
    </div>
  </div>
  <router-view transition='animation' class='content' keep-alive></router-view>
</div>
</template>
<script>
// import login from './page/login.vue'
import login from './page/login.vue'
import home from './page/home.vue'
export default {
  components: {
    login,
    home
  },
  methods:{
    loadData:function(){
    },
  },
  data(){
    return {
      loginShowFlag:true
    }
  }
}
</script>

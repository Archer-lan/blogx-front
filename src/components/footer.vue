<template>
  <div class="contained">
    <div class="foot">
      <div @click="goDetail(`https://beian.miit.gov.cn`)" class="number">蜀ICP备2023000333号</div>
      <div>© 2022 - 2023</div>
      <div>由 <a href="https://github.com/vuejs/vue">Vue 驱动</a>｜<a href="https://nodejs.org/zh-cn/">Node.js 提供服务</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods:{
    goDetail(url){
      window.location.href=url;
    }
  }
}
</script>

<style scoped>
.contained{
  width: 100%;
}
.foot{
  width: 1227px;
  margin: 0 auto;
  align-items: center;
}
.foot div{
  width: auto;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
}
.number:hover{
  color: black;
}
a{
  color: #2d2e2f;
  text-decoration: none;
}
</style>
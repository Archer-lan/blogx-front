<template>
  <div class="contained" :style="{borderBottom:state}">
    <div class="con">
      <div class="heade">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/project">Project</router-link>
      </div>
      <div class="heade">
        <a class="git-link" href="https://github.com/Archer-lan">
          <svg stroke="black" fill="black" stroke-width="0" viewBox="0 0 16 16" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
            </path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      state:'',
    }
  },
  mounted(){
      /*注册事件*/
      if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',this.scrollFunc,false);
      }//W3C
      window.onmousewheel=document.onmousewheel=this.scrollFunc;//IE/Opera/Chrome
  },
  methods:{
    scrollFunc(e){
      e=e || window.event;
      if(e.wheelDelta){//IE/Opera/Chrome
        if(e.wheelDelta>0) {
          this.state='0px solid white';
        }
        else {
          this.state='1px solid #e5e7eb';
        }
      }else if(e.detail){//Firefox
        if(e.detail>0) this.state='0px solid white'
        else this.state='1px solid #e5e7eb'
      }
    }
  }
}
</script>

<style scoped>
.contained{
  width: 100%;
  height: 60px;
  top:0;
  position:fixed;
  z-index: 9999;
  background-color: white;
}
.con{
  width: 1227px;
  height: 60px;
  margin: 0 auto;
  padding: 0 24px ;
  display: flex;
  justify-content: space-between;
}
.heade{
  /*width: 1227px;*/
  /*height: 60px;*/
  /*margin: 0 auto;*/
  /*padding: 0 24px ;*/
  /*justify-content: space-between;*/
  display: flex;
}
.heade a{
  width: 80px;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  text-decoration: none;
  color: rgb(96,98,102);
}
.heade a:hover{
  color: black;
}
.git-link{
  padding: 2px 0 0;
}
</style>
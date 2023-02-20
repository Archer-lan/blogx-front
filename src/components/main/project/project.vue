<template>
<div>
  <div class="contained">
    <div class="main">
      <p class="big-title">Projects</p>
      <p class="sub-title">Showcase of my projects on front-end development.</p>
      <div class="project">
        <p class="project-cat">Vue Ecosystem</p>
        <div class="postcards-contained">
          <div class="postcards" v-for="item in project.vue" v-bind:key="item" @click="goDetail(item.link)">
            <p class="title">{{item.name}}</p>
            <p class="describe">{{item.describe}}</p>
          </div>
        </div>
        <p class="project-cat">Wechat Ecosystem</p>
        <div class="postcards-contained">
          <div class="postcards" v-for="item in project.wechat" v-bind:key="item" @click="goDetail(item.link)">
            <p class="title">{{item.name}}</p>
            <p class="describe">{{item.describe}}</p>
          </div>
        </div>
        <p class="project-cat">Node Ecosystem</p>
        <div class="postcards-contained">
          <div class="postcards" v-for="item in project.node" v-bind:key="item" @click="goDetail(item.link)">
            <p class="title">{{item.name}}</p>
            <p class="describe">{{item.describe}}</p>
          </div>
        </div>
        <p class="project-cat">Hexo Ecosystem</p>
        <div class="postcards-contained">
          <div class="postcards" v-for="item in project.hexo" v-bind:key="item" @click="goDetail(item.link)">
            <p class="title">{{item.name}}</p>
            <p class="describe">{{item.describe}}</p>
          </div>
        </div>
      </div>
      </div>
  </div>
</div>
</template>

<script>
const API_URl="/project"
export default {
  name: "project",
  data(){
    return {
      project:{},
    }
  },
  created() {
    this.getProject();
  },
  methods:{
    async getProject(){
      this.project=(await (await fetch(API_URl)).json()).message;
      console.log(this.project);
    },
    goDetail(url){
      window.location.href=url;
    }
  }
}
</script>

<style scoped>
.contained{
  width:100%;
  background-color:white;
}
.main{
  font-size: 18px;
  width: 1115px;
  padding: 48px 32px;
  margin:0 auto;
  align-items: center;
}
.big-title{
  margin: 0px 0 8px 0;
  font-size: 32px;
  color: black;
  font-weight: 500;
}
.sub-title{
  font-size: 16px;
  margin: 12px 0 8px 0;
  color: darkgray;
  font-style: italic;
}
.project{
  margin: 60px 0 0 0;
}
.project-cat{
  color: #555555;
  font-weight: 800;
}
.postcards-contained{
  margin: 24px 0 0;
  width: 820px;
  display: flex;
}
.postcards{
  width: 374px;
  height: 84px;
  padding: 16px;
  border-radius: 5px;
}
.postcards:hover{
  background-color: whitesmoke;
}
.title{
  margin: 8px 0 0;
  font-weight: 700;
}
.describe{
  margin: 8px 0 0;
  font-size: 16px;
  color: darkgray;
}
</style>
<template>
<div>
  <div class="contained">
    <div class="main">
      <div class="postcards" v-for="item in blogHeader" v-bind:key="item" @click="goDetail(item)">
<!--        <router-link to="`/blog/detail/+this.store.blogNum`">-->
          <div class="left">
            <p class="title">{{item.title}}</p>
            <p class="time">{{item.time}}</p>
            <p class="email">{{item.email}}</p>
            <p class="describe">{{item.describe}}</p>
          </div>
          <div class="right">
            <div>
              <button class="cat">{{item.categories}}</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

const API_URL="/articles/header"
export default {
  name: "blog-header",
  data(){
    return {
      blogHeader:[],
    }
  },
  created() {
    this.blogHeader=JSON.parse(localStorage.getItem('blogHeader'));
    // console.log(this.blogHeader)
    if(!this.blogHeader){
      this.getBlogHeader();
    }
    window.addEventListener('beforeunload', function(event) {
      localStorage.clear();
    }, false);
  },
  methods:{
    async getBlogHeader(){
      this.blogHeader=(await (await fetch(API_URL)).json()).message;
      localStorage.setItem('blogHeader',JSON.stringify(this.blogHeader));
    },
    goDetail(item){
      this.$router.push('detail/'+item.id);
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
.postcards{
  width:1115px;
  height:120px;
  padding:16px;
  margin:32px 0;
  border:1px solid #e5e7eb;
  border-radius:20px;
  display:flex;
}
.postcards:hover{
  transform:scale(1.03);
  box-shadow:5px 5px 10px rgba(0,0,0,.5)
}
.postcards div{
  flex:1;
}
.title{
  margin:0;
  font-weight:700;
}
.time{
  margin:24px 0 8px 0;
  font-weight: 700;
  font-size:14px;
}
.email,.describe{
  margin:0 0 8px 0;
  font-size:14px;
}
.right{
  display:flex;
  align-items:flex-end;
}
.right div button{
  margin:0;
  float:right;
  border: 0px;
  font-size:14px;
}
</style>
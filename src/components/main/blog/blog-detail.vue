<template>
  <div class="inner">
    <div class="text">
      <div></div>
      <div class="detail" v-highlight v-html="this.blogDetail">
      </div>
      <div class="content" >
        <ul>
          <TreeItem class="item" :model="this.blogContentTree"></TreeItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TreeItem from "@/components/TreeItem.vue"
const API_URL_TEXT="/articles/text?id="
const API_URL_CONTENT="/articles/content?id="
export default {
  name: "blog-detail",
  components:{
    TreeItem
  },
  data(){
    return {
      blogDetail:'',
      blogContent:[],
      blogContentTree:{},
      blogHeader:[]
    }
  },
  created() {
    console.log(this.$router.currentRoute._value.params.id)
    this.getBlogContent();
    this.getBlogText();
  },
  methods:{
    async getBlogText(){
      const url=`${API_URL_TEXT}${this.$router.currentRoute._value.params.id}`
      this.blogDetail=(await (await fetch(url)).json()).message;
    },
    async getBlogContent(){
      const url=`${API_URL_CONTENT}${this.$router.currentRoute._value.params.id}`
      this.blogContent=(await (await fetch(url)).json()).message;
      this.blogHeader=JSON.parse(localStorage.getItem('blogHeader'));
      this.blogContentTree={
        text:this.blogHeader[this.$router.currentRoute._value.params.id].title,
        id:0,
        children:this.blogContent
      };
    }
  }
}
</script>

<style>
.inner{
  margin-top: 70px;
  margin-bottom: 70px;
  width:100%;
}
.text{
  width:1227px;
  margin:0 auto;
  display: flex;
}
.content{
  position: -webkit-sticky;
  position: sticky;
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  margin-left: 25px;
  width:27%;
  border:1px solid #e5e7eb;
  border-radius: 20px;
  padding:20px 25px 20px 0;
  /*overflow: auto;*/
  height:30%;
  top:70px;
  /*z-index: -1;*/
}
.detail{
  box-shadow:0px 0px 10px rgba(0,0,0,.5);
  border:1px solid #e5e7eb;
  border-radius: 20px;
  padding:24px 32px;
  width:73%;
  height: auto;
}
.detail p,pre,ol,table{
  line-height: 2;
  padding: 0 0 0 80px;
}
.detail h2{
  padding: 0 0 0 20px;
}
.detail h3{
  padding: 0 0 0 40px;
}
.detail h4{
  padding: 0 0 0 60px;
}
.detail table{
  text-align: center;
}

.item {
  cursor: pointer;
  list-style: none;
  line-height: 2;
}
/*.bold {*/
/*  font-weight: bold;*/
/*}*/
</style>
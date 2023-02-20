import {defineStore} from "pinia";
export const globalVar=defineStore('globalStore',{
    state:()=>({
        blogNum:0,
        blogName:'',
        blogAuthor:'',
    }),
    actions:{
       changeBlog(item){
           this.blogNum=item.id;
           this.blogName=item.title;
           this.blogAuthor=item.name;
       },
    }
})
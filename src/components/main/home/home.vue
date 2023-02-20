<template>
<div>
  <div class="contained">
    <div class="homepage">
      <p class="head">Lanlan's Blog</p>
      <p>Hi, I am lanlan, one of the front-end development, currently moving bricks in a lab.</p>
      <p>A JavaScript, TypeScript, LeetCode, Vue, React, algorithm lover.</p>
      <hr>
      <p>Four years of college time passed quickly.
        I learned that learning is like sailing against the current.
        if you don't advance, you will retreat</p>
      <p>My dream is to be a happy, humorous and honest person who can also guard the beloved.</p>
      <p>Mr. Yuan Longping once said that we should keep our dreams in mind and be down-to-earth.</p>
      <p>I deeply agree with this sentence and I will create the future with positivity!</p>
      <hr>
      <p>Find me on <a href="https://github.com/Archer-lan">Github</a> or <a href="mailto:lan78125@gmail.com">Email</a>.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.contained{
  width: 100%;
}
.homepage{
  font-size: 18px;
  width: 1115px;
  padding: 80px 80px;
  margin:0 auto;
  align-items: center;
}
.head{
  font-size: 36px;
}
hr{
  display: block;
  width: 50px;
  margin: 40px auto;
}
a{
  color: #2d2e2f;
}
a:hover{
  color: black;
  border-bottom: 1px solid black;
}
</style>
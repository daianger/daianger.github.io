<template>
  <div class="hello">
   <h2>課題</h2>
   <HomeWork subject="hoge" content="huga" />
   <h2>お知らせ</h2>
  </div>
</template>

<script>
import HomeWork from '@/components/HomeWork.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    HomeWork
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

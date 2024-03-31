<template>
  <div class="hello">
    
   <HomeWork subject="Daiangerリニューアルについて" content="この度、Daianger Webページをリニューアルしました。主な変更点は以下のとおりです。" />
   <HomeWork subject="1.課題管理をNotionで" content="管理者が理系のため、文系の方の課題の管理の方法について考えた結果、管理したい人が誰でも管理できるNotionを用いることにしました。" />
   <HomeWork subject="2.URLの変更" content="(旧) ichl01.github.io/daianger (新) daianger.github.io" />
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

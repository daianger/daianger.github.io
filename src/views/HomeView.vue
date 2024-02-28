<template>
  <div class="home">
    <PageTemp title="Home" />
    <IndexPage msg="Welcome to Your Vue.js App" />
    <HomeWork subject="hoge" content="huga" />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/IndexPage.vue'
import HomeWork from '@/components/HomeWork.vue'
import PageTemp from '@/components/PageTemp.vue'

export default {
  name: 'HomeView',
  components: {
    IndexPage,
    HomeWork,
    PageTemp
  }
}
</script>

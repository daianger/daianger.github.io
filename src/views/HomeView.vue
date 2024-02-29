<template>
  <div class="home">
    <PageTemp title="Home" />
    <IndexPage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import IndexPage from '@/components/IndexPage.vue'
import PageTemp from '@/components/PageTemp.vue'

export default {
  name: 'HomeView',
  components: {
    IndexPage,
    PageTemp
  }
}
</script>

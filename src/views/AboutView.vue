

<template>
  <div class="home">
    <PageTemp title="About" />

    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTemp from '@/components/PageTemp.vue'

export default {
  name: 'HomeView',
  components: {

    PageTemp
  }
}
</script>

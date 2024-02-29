

<template>
  <div class="home">
    <PageTemp title="お知らせ" />

    <div class="about">
      <h2>お知らせが表示されます</h2>
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

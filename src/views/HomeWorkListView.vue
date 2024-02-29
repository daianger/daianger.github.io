

<template>
    <div class="home">
        <PageTemp title="課題" />

        <div class="about">
            <h2>課題</h2>
        </div>
        <HomeWork subject="hogehoge" content="hugahuga" />
    </div>
</template>
  
<script>
// @ is an alias to /src
import PageTemp from '@/components/PageTemp.vue'
import HomeWork from '@/components/HomeWork.vue'


export default {
    name: 'HomeView',
    components: {
        HomeWork,
        PageTemp
    }
}
</script>
  
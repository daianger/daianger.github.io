<template>
    <div class="home">
        <PageTemp title="課題" />

        <div class="about">
            <a href="https://pollen-halibut-2e3.notion.site/19af46e9d8854130a30823104c87e1d1?v=abe17c351af148f09d7abae62f33ea0c">
                <h2>文系</h2>
            </a>
            <a href="https://pollen-halibut-2e3.notion.site/5761092e191041e9a643f3c5707d2430?v=e068453701e74c258b034f1e165dea94">
                <h2>理系</h2>
            </a>
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

<style scoped>
.button {
    list-style: none;
}

@media (prefers-color-scheme: light) {
    .about>a {
        color: black;
    }
}

@media (prefers-color-scheme: dark) {
    .about>a {
        color: white;
    }
}
</style>
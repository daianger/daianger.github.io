<template>
    <div class="home">
        <PageTemp title="課題" />

        <div class="about">
            <ul style="display: flex; ">
                <li class="button">
                    <SubjectSelect content="" />
                </li>
            </ul>
            <h2>近日中</h2>
            <div id="upcoming">
                <HomeWork subject="UpComing" content="hugahuga" />
            </div>
            <h2>その他</h2>
            <div id="others">
                <HomeWork subject="Others" content="hugahuga" />
            </div>
            <h2>過去の課題</h2>
            <div id="past">
                <HomeWork subject="Past" content="hugahuga" />
            </div>
        </div>
      
    </div>
</template>

<script>
// @ is an alias to /src
import PageTemp from '@/components/PageTemp.vue'
import HomeWork from '@/components/HomeWork.vue'
import SubjectSelect from '@/components/SubjectSelect.vue'


export default {
    name: 'HomeView',
    components: {
        HomeWork,
        PageTemp,
        SubjectSelect
    }
}
</script>

<style scoped>
.button{
    list-style: none;
}
</style>
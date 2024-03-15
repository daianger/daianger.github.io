<template>
    <div class="home">
        <PageTemp title="課題" />

        <div class="about">
            <ul style="display: flex; ">
                <li class="button">
                    <SelectButton content="文系" />
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
        <HomeWork subject="hogehoge" content="hugahuga" />
    </div>
</template>

<script>
// @ is an alias to /src
import PageTemp from '@/components/PageTemp.vue'
import HomeWork from '@/components/HomeWork.vue'
import SelectButton from '@/components/atoms/ButtonElem.vue'


export default {
    name: 'HomeView',
    components: {
        HomeWork,
        PageTemp,
        SelectButton
    }
}
</script>

<style scoped>
.button{
    list-style: none;
}
</style>
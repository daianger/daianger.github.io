<template>
    <div>
        <div class="use">
            <h1><span class="italic">{{ title }}</span></h1>
        </div>

        <HeaderElem />
    </div>
</template>
<style scoped>
.italic {
    font-style: italic;
}

.use {
    padding-top: 90px;
}
</style>
<script>
import HeaderElem from '@/components/HeaderElem.vue'
export default {
    name: 'HomeWork',
    props: {
        title: String
    },
    components: {
        HeaderElem
    }
}
</script>
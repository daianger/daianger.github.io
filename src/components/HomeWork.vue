<template>
    <div class="homework">
        <h2>{{ subject }}</h2>
        <p style="margin-left: 20px;">{{ content }}</p>
    </div>
</template>
<style scoped>
.homework {
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 12px;
    padding-top: 4px;
    padding-bottom: 10px;
    border-radius: 18px;
}

@media (prefers-color-scheme: light) {
    .homework {
        background-color: #FFFFFF;
        color: black;
    }
}

@media (prefers-color-scheme: dark) {
    .homework {
        background-color: #1D1D1F;
        color: white;
    }
}
</style>
<script>
export default {
    name: 'HomeWork',
    props: {
        subject: String,
        content: String
    }
}
</script>
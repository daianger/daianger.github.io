<template>
    <div class="homework">
        <table>
            <tr><td>教科:</td><td>{{ subject }}</td></tr>
            <tr><td>範囲:</td><td>{{ content }}</td></tr>
        </table>
    </div>
</template>
<style scoped>
.homework {
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
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
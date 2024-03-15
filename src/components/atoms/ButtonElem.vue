<template>
    <div class="homework">
        <div>
            <input type="checkbox" name="bunri" value="arts"> 文系
            <input type="checkbox" name="bunri" value="science"> 理系
        </div>
        <div>
            <input type="checkbox" name="sci" value="physics"> 物理
            <input type="checkbox" name="sci" value="biology"> 生物
        </div>
        <div>
            <input type="checkbox" name="soc" value="geo"> 地理
            <input type="checkbox" name="soc" value="JPhis"> 日本史
            <input type="checkbox" name="soc" value="Worldhis"> 世界史
        </div>

    </div>
</template>
<style scoped>
.but {
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-size: 17px;
}

@media (prefers-color-scheme: light) {
    .but {
        background-color: #FFFFFF;
        color: black;
    }
}

@media (prefers-color-scheme: dark) {
    .but {
        background-color: #1D1D1F;
        color: white;
    }
}
</style>
<script>
export default {
    name: 'SelectButton',
    props: {
        content: String
    }
}
</script>
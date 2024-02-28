<template>
    <div class="header">
        <ul>
            <li>
                <h1 style="font-style: italic;">Daianger</h1>
            </li>
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/about">About</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
}

ul {
    display: flex;
    align-items: center;
}

li {
    list-style: none;
    margin-left: 20px;
    font-size: 20px;
    margin-top: 0;
}

a,
a:hover,
a:visited {
    color: inherit;
    text-decoration: none;
}
</style>

<script>
export default {
    name: 'HomeWork',
    props: {
        subject: String,
        content: String
    },
}
</script>
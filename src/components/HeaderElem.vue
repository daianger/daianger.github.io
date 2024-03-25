<template>
    <div class="header" v-if="dispsize()">
        <ul class="ma">
            <li class="title">
                <h1>Daianger(d)</h1>
            </li>
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/about">About</router-link></li>
            <li> <router-link to="/homework">Homework</router-link></li>
            <li> <router-link to="/exam">Exam</router-link></li>
            <li> <router-link to="/timetable">Time Table</router-link></li>
        </ul>
    </div>
    <div v-else class="header">
        <ul  class="ma">
            <li class="title">
                <h1>Daianger(d)</h1>
            </li>
        <li>Menu</li>    
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
    padding-left: 0;
}

li {
    list-style: none;
    margin-left: 20px;
    font-size: 20px;
    margin-top: 0;
}

.title {
    margin-left: 0;
}

.title>h1 {
    font-style: italic;
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
    methods: {
        dispsize() {
            if (window.innerWidth >= 800) {
                return true
            } else {
                return false
            }
        }

    }
}
</script>
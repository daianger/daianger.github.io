<template>
    <div class="header" v-if="dispsize()">
        <ul class="ma ul">
            <li class="title">
                <h1>Daianger(β)</h1>
            </li>
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/homework">Homework</router-link></li>
            <li> <router-link to="/exam">Exam</router-link></li>
            <li> <router-link to="/timetable">Time Table</router-link></li>
        </ul>
    </div>
    <div v-else class="header">
        <!--モバイル-->
        <ul class="ma ul">
            <li class="title">
                <h1>Daianger(β)</h1>
            </li>
            <li @click="header()">Menu</li>
        </ul>
        <div>
            <!--開かれたモバイル-->
            <div class="background" id="mobilehe">
                <ul>
                    <li @click="header()">
                        <h3>x</h3>
                    </li>
                    <li @click="header()">
                        <h3> <router-link to="/">Home</router-link></h3>
                    </li>
                    <li @click="header()">
                        <h3> <router-link to="/homework">Homework</router-link></h3>
                    </li>
                    <li @click="header()">
                        <h3> <router-link to="/exam">Exam</router-link></h3>
                    </li>
                    <li @click="header()">
                        <h3> <router-link to="/timetable">Time Table</router-link></h3>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
.header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;
}

.ul {
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

.background {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    padding-top: 20%;
}

@media (prefers-color-scheme: light) {
    .background {
        background-color: #F5F5F7;
        color: black;
    }
}

@media (prefers-color-scheme: dark) {
    .background {
        background-color: #000000;
        color: white;
    }
}

.hidden {
    display: none;
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
        },
        header() {
            document.getElementById("mobilehe").classList.toggle('hidden');
        }
    },
}
</script>
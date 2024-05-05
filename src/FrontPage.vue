<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
    overflow: hidden;
    background: rgb(238, 238, 238);
    font-family: 'Roboto', sans-serif;
}
</style>

<template>
    <NavBar />
    <div class="row">
        <SideBar />
        <HomePage />
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    HomePage
  }
}
</script>

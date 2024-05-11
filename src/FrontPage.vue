<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

body {
  overflow: hidden;
  background: rgb(238, 238, 238);
  font-family: "Roboto", sans-serif;
}
</style>

<template>
  <NavBar />
  <div class="row">
    <SideBar @goToPage="moveToPage" />
    <HomePage v-if="page == ''" />
    <CarPage v-else-if="page == 'cars'" />
    <TransactionsPage v-else-if="page == 'transactions'" />
    <LoyalCustomers v-else-if="page == 'customers'" />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
import HomePage from "./components/HomePage.vue";
import CarPage from "./components/CarPage.vue";
import TransactionsPage from "./components/TransactionsPage.vue";
import LoyalCustomers from "./components/LoyalCustomers.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    HomePage,
    CarPage,
    TransactionsPage,
    LoyalCustomers
  },

  data() {
    return {
      page: "",
    };
  },

  methods: {
    moveToPage: function (page) {
      this.page = page;
    },
  },
};
</script>

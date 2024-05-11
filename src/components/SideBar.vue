<style>
.bg-blue {
  background: rgb(41, 148, 230);
}

.row .col-10 h1 {
  font-size: 1.5rem;
  letter-spacing: 5px;
}

ul {
  list-style: none;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

ul li {
  transition: background-color 0.3s;
  padding: 10px 0 10px 8px;
  border-radius: 5px;
  width: 60%;
  cursor: pointer;
}

ul li:hover {
  background: rgba(105, 186, 247, 0.894);
}

ul li.active {
  background: rgba(105, 186, 247, 0.894);
}
</style>

<template>
  <aside class="col-3 vh-100 bg-blue text-light fixed-top py-5 px-3">
    <div class="row mb-5">
      <div class="col-1 me-4">
        <img src="../assets/img/car.png" alt="car-logo" width="30px" />
      </div>
      <div class="col-10">
        <h1>WIDYA RENTAL</h1>
      </div>
    </div>
    <ul class="p-0">
      <li @click="goToPage('')" :class="page == '' ? 'active' : ''">
        <a href="#">
          <FontAwesomeIcon icon="fas fa-house" class="me-2" />
          Home
        </a>
      </li>
      <li @click="goToPage('cars')" :class="page == 'cars' ? 'active' : ''">
        <a href="#">
          <FontAwesomeIcon icon="fas fa-car" class="me-2" />
          Cars
        </a>
      </li>
      <li @click="goToPage('transactions')" :class="page == 'transactions' ? 'active' : ''">
        <a href="#">
          <FontAwesomeIcon icon="fas fa-money-bills" class="me-2" />
          Transaction
        </a>
      </li>
      <li @click="goToPage('customers')" :class="page == 'customers' ? 'active' : ''">
        <a href="#">
          <FontAwesomeIcon icon="fas fa-people-group" class="me-2" />
          Customers
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      page: ''
    }
  },

  methods: {
    goToPage: function (page) {
      this.$emit("goToPage", page);
      this.page = page;
    },
  },
};
</script>

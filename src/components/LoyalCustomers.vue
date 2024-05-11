<style>
.btn-blue {
    background: rgb(41, 148, 230) !important;
    transition: background-color .3s;
    color: white !important;
}

.btn-blue:hover {
    background: rgb(36, 123, 190) !important;
    color: white !important;
}

.customer-name {
    font-size: 1.1rem;
}

.customer-list {
    height: 75vh;
    overflow-y: auto;
}
</style>

<template>
  <div class="col-9 page-container">
    <h5 class="fw-bold">Loyal Customers</h5>
    <div class="mt-3 ms-2 customer-list">
        <div 
        class="col-9 row bg-light shadow p-3 rounded mb-3"
        v-for="customer in customers"
        :key="customer.id"
        >
            <div class="col-6 d-flex align-items-center">
                <img src="../assets/img/user.png" alt="profile-picture" width="40px" class="me-3">
                <div>
                    <strong class="customer-name">{{ customer.name }}</strong>
                    <br>
                    <small class="text-secondary">
                        Email: {{ `${customer.email}@gmail.com` }}
                    </small>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
const customers = [
    {
        id: 1,
        name: "Joe Vega",
        email: "joevega"
    },
    {
        id: 2,
        name: "Maria Rose",
        email: "mariarose"
    },
    {
        id: 3,
        name: "Rosemary Winters",
        email: "rosemarywinters"
    },
    {
        id: 4,
        name: "Arno Dorian",
        email: "arnodorian"
    },
    {
        id: 5,
        name: "Amy Kuswanti",
        email: "amykuswanti"
    },
    {
        id: 6,
        name: "Robby Brave",
        email: "robbybrave"
    },
];
export default {
    data() {
        return {
            customers,
        }
    },
}
</script>

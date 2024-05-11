<style>
.btn-blue {
    background: rgb(41, 148, 230);
    transition: background-color .3s;
    color: white;
}

.btn-blue:hover {
    background: rgb(36, 123, 190);
    color: white;
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
                    <small class="text-secondary">{{ customer.job }}</small>
                </div>
            </div>
            <div class="col-6 text-end my-3">
                <a href="#" class="btn btn-sm btn-blue">See Info</a>
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
        job: "Entrepreneur"
    },
    {
        id: 2,
        name: "Maria Rose",
        job: "Accounting Staff"
    },
    {
        id: 3,
        name: "Rosemary Winters",
        job: "Graphic Designer Freelance"
    },
    {
        id: 4,
        name: "Arno Dorian",
        job: "Web Programmer"
    },
    {
        id: 5,
        name: "Amy Kuswanti",
        job: "Social Media Strategies"
    },
    {
        id: 6,
        name: "Robby Brave",
        job: "Wordpress Developer"
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

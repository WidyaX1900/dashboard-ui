<style></style>

<template>
  <div class="col-9 page-container">
    <div class="row col-11 ms-1 mb-2">
      <div class="col-6">
        <h5 class="fw-bold">Transactions</h5>
      </div>
      <div class="col-6 text-end">
        <a  
          href="#" 
          class="text-decoration-none me-3" 
          @click.prevent="getTrancsactionsByStatus()"
        >
          All
        </a>
        <a  
          href="#" 
          class="text-decoration-none me-3" 
          @click.prevent="getTrancsactionsByStatus('SUCCESS')"
        >
          Success
        </a>
        <a  
          href="#" 
          class="text-decoration-none me-3" 
          @click.prevent="getTrancsactionsByStatus('PENDING')"
        >
          Pending
        </a>
        <a  
          href="#" 
          class="text-decoration-none me-3" 
          @click.prevent="getTrancsactionsByStatus('EXPIRED')"
        >
          Expired
        </a>
        <a  
          href="#" 
          class="text-decoration-none me-3" 
          @click.prevent="getTrancsactionsByStatus('FAILED')"
        >
          Failed
        </a>
        <a  
          href="#" 
          class="text-decoration-none" 
          @click.prevent="getTrancsactionsByStatus('CANCEL')"
        >
          Cancel
        </a>
      </div>
    </div>
    <div class="ms-2 transaction-container">
      <div class="col-11 bg-light p-3 rounded shadow mb-3">
        <table class="transactions-list">
          <thead>
            <tr>
              <th class="fw-bold">No</th>
              <th class="fw-bold">Car Series</th>
              <th class="fw-bold">Photo</th>
              <th class="fw-bold">Rental date</th>
              <th class="fw-bold">Pay Amount</th>
              <th class="fw-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(transaction, index) in transactions"
              :key="transaction.id"
              class="border-bottom"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ transaction.carSeries }}</td>
              <td>
                <img
                  :src="require(`@/assets/img/${transaction.photo}`)"
                  alt="rental-car"
                  width="60px"
                  class="mt-3 mb-2"
                />
              </td>
              <td>{{ transaction.rentalDate }}</td>
              <td>Rp {{ transaction.payAmount }}</td>
              <td :class="statusTextColor(transaction.status)">
                {{ transaction.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const db = [
  {
    id: 1,
    carSeries: "Toyota Etios Valco",
    photo: "etios-valco.jpg",
    rentalDate: "May 5 2024, 11:19",
    payAmount: "350.000",
    status: "SUCCESS",
  },
  {
    id: 2,
    carSeries: "Honda Brio",
    photo: "honda-brio.png",
    rentalDate: "May 6 2024, 21:00",
    payAmount: "300.000",
    status: "PENDING",
  },
  {
    id: 3,
    carSeries: "Toyota Agya",
    photo: "toyota-agya.jpg",
    rentalDate: "May 7 2024, 12:15",
    payAmount: "400.000",
    status: "EXPIRED",
  },
  {
    id: 4,
    carSeries: "Toyota Yaris",
    photo: "toyota-yaris.png",
    rentalDate: "May 9 2024, 15:25",
    payAmount: "250.000",
    status: "FAILED",
  },
  {
    id: 5,
    carSeries: "Toyota Agya",
    photo: "toyota-agya.jpg",
    rentalDate: "May 13 2024, 15:15",
    payAmount: "350.000",
    status: "CANCEL",
  },
];

const transactions = db;

export default {
  data() {
    return {
      transactions,
    };
  },

  methods: {
    statusTextColor: function (status) {
      let color = "";

      if (status == "FAILED") {
        color = "text-danger";
      } else if (status == "CANCEL") {
        color = "text-warning";
      } else if (status == "PENDING") {
        color = "text-secondary";
      } else if (status == "SUCCESS") {
        color = "text-success";
      }

      return color;
    },

    getTrancsactionsByStatus: function (status = '') {
      if(status != '') {
        this.transactions = db.filter(data => {
          return data.status == status;
        })        
      } else {
        this.transactions = db;
      }
    }
  },
};
</script>

<style>
:root {
  --text-primary-color: rgb(41, 148, 230);
}

.page-container {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 340px;
}
</style>

<template>
  <div class="col-9 page-container">
    <div class="bg-light shadow p-3 rounded me-4">
      <h6 class="fw-bold mb-4">Cars</h6>
      <div class="col-8 mb-4">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control rounded-pill"
            placeholder="Search car..."
            v-model="keyword"
            @input="searchCars(keyword)"
          />
        </div>
      </div>
      <table v-if="cars.length > 0">
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Car Name</th>
            <th>Rental Price</th>
            <th>Car Status</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(car, index) in cars" 
            :key="car.id"
          >
            <td>{{ index + 1 }}</td>
            <td>
              <img
                :src="require(`@/assets/img/${car.photo}`)"
                alt="rental-car"
                width="60px"
                class="mt-3"
              />
            </td>
            <td>{{ car.carSeries }}</td>
            <td>Rp {{ car.cost }}</td>
            <td :class="statusTextColor(car.status)">
                {{ car.status }}
            </td>
          </tr>
        </tbody>
      </table>
      <div 
        class="text-center fs-5 fst-italic text-secondary fw-bold opacity-50" 
        v-else
      >
        Car not found!
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
    cost: "200.000",
    status: "AVAILABLE",
  },
  {
    id: 2,
    carSeries: "Honda Brio",
    photo: "honda-brio.png",
    rentalDate: "May 6 2024, 21:00",
    cost: "300.000",
    status: "RENTED",
  },
  {
    id: 3,
    carSeries: "Toyota Agya",
    photo: "toyota-agya.jpg",
    rentalDate: "May 7 2024, 12:15",
    cost: "250.000",
    status: "ON REPAIR",
  },
  {
    id: 4,
    carSeries: "Toyota Yaris",
    photo: "toyota-yaris.png",
    rentalDate: "May 9 2024, 15:25",
    cost: "250.000",
    status: "AVAILABLE",
  },
];

const cars = db;

export default {
  data() {
    return {
      cars,
      keyword: ""
    }
  },

  methods: {
    statusTextColor: function (status) {
      let color = '';

      if(status == "ON REPAIR") {
        color = 'text-danger';
      } else if(status == "RENTED") {
        color = 'text-secondary';
      } else {
        color = 'text-success';
      }

      return color;
    },

    searchCars: function (keyword) {
      this.cars = db.filter(data => {
        return data.carSeries.toLowerCase().includes(keyword) 
      });
    }
  }
}
</script>

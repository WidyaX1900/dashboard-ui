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
          />
        </div>
      </div>
      <table>
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
          <tr>
            <td>1</td>
            <td>
              <img
                src="../assets/img/etios-valco.jpg"
                alt="rental-car"
                width="60px"
                class="mt-3"
              />
            </td>
            <td>Toyota Etios Valco</td>
            <td>Rp 200.000</td>
            <td class="text-success">
                AVAILABLE
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                src="../assets/img/honda-brio.png"
                alt="rental-car"
                width="60px"
                class="mt-3"
              />
            </td>
            <td>Honda Brio</td>
            <td>Rp 300.000</td>
            <td class="text-secondary">
                RENTED
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img
                src="../assets/img/toyota-agya.jpg"
                alt="rental-car"
                width="60px"
                class="mt-3"
              />
            </td>
            <td>Toyota Agya</td>
            <td>Rp 250.000</td>
            <td class="text-danger">
                ON REPAIR
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img
                src="../assets/img/toyota-yaris.png"
                alt="rental-car"
                width="60px"
                class="mt-3"
              />
            </td>
            <td>Toyota Yaris</td>
            <td>Rp 250.000</td>
            <td class="text-success">
                AVAILABLE
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script></script>

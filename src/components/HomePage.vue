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

    .statistic p {
        font-size: 1.7rem;
        font-weight: bold;
        color: var(--text-primary-color);
    }

    table {
        width: 100%;
    }

    table th {
        font-weight: normal;
        border-bottom: 1px solid black;
    }

    .text-blue {
        color: var(--text-primary-color);
    }
</style>

<template>
    <div class="col-9 page-container">
        <div class="row mb-4">
            <div class="col-4 px-4">
                <div class="bg-light rounded p-3 shadow statistic">
                    <h6 class="fw-bold">Total Income</h6>
                    <p>Rp 50.000.000.000</p>
                </div>
            </div>
            <div class="col-4 px-4">
                <div class="bg-light rounded p-3 shadow statistic">
                    <h6 class="fw-bold">Total Car</h6>
                    <p>58</p>   
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-8 px-4">
                <div class="bg-light rounded p-3 shadow">
                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold mb-4">Transactions</h6>
                        <a href="#" class="text-blue text-decoration-none">
                            All Transaction
                            <FontAwesomeIcon icon="fas fa-arrow-right" class="ms-1"/>
                        </a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Image</th>
                                <th>Car Name</th>
                                <th>Pay Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src="../assets/img/etios-valco.jpg" alt="rental-car" width="60px" class="mt-3">
                                </td>
                                <td>Toyota Etios Valco</td>
                                <td>Rp 200.000</td>
                                <td class="text-success">
                                    <div role="rental-status">SUCCESS</div>
                                </td>      
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <img src="../assets/img/honda-brio.png" alt="rental-car" width="60px" class="mt-3">
                                </td>
                                <td>Honda Brio</td>
                                <td>Rp 300.000</td>
                                <td class="text-secondary">
                                    <div role="rental-status">PENDING</div>
                                </td>      
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <img src="../assets/img/toyota-agya.jpg" alt="rental-car" width="60px" class="mt-3">
                                </td>
                                <td>Toyota Agya</td>
                                <td>Rp 250.000</td>
                                <td class="text-warning">
                                    <div role="rental-status">CANCEL</div>
                                </td>      
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <img src="../assets/img/toyota-yaris.png" alt="rental-car" width="60px" class="mt-3">
                                </td>
                                <td>Toyota Yaris</td>
                                <td>Rp 250.000</td>
                                <td class="text-danger">
                                    <div role="rental-status">FAILED</div>
                                </td>      
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4 px-4">
                <div class="bg-light rounded p-3 shadow me-4">
                    <h6 class="fw-bold mb-3">Loyal Customers</h6>
                    <div class="row align-items-center mb-4">
                        <div class="col-2">
                            <img src="../assets/img/user.png" alt="user-profile" width="30px">
                        </div>
                        <div class="col-8">
                            <small>Rudi Tabootie</small>
                        </div>
                    </div>
                    <div class="row align-items-center mb-4">
                        <div class="col-2">
                            <img src="../assets/img/user.png" alt="user-profile" width="30px">
                        </div>
                        <div class="col-8">
                            <small>Alex Mercer</small>
                        </div>
                    </div>
                    <div class="row align-items-center mb-4">
                        <div class="col-2">
                            <img src="../assets/img/user.png" alt="user-profile" width="30px">
                        </div>
                        <div class="col-8">
                            <small>Carl Johnson</small>
                        </div>
                    </div>
                    <div class="row align-items-center mb-4">
                        <div class="col-2">
                            <img src="../assets/img/user.png" alt="user-profile" width="30px">
                        </div>
                        <div class="col-8">
                            <small>James Smith</small>
                        </div>
                    </div>
                    <div class="text-center mt-4 pt-2">
                        <a href="#" class="text-blue text-decoration-none">
                            All Customers
                            <FontAwesomeIcon icon="fas fa-arrow-right" class="ms-1"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>
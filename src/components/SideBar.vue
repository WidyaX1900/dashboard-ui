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
        transition: background-color .3s;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        border-radius: 5px;
    }

    ul li:hover {
        background: rgba(105, 186, 247, 0.894);
    }
</style>

<template>
    <aside class="col-3 vh-100 bg-blue text-light fixed-top py-5 px-3">
        <div class="row mb-5">
            <div class="col-1 me-4">
                <img src="../assets/img/car.png" alt="car-logo" width="30px">
            </div>
            <div class="col-10">
                <h1>WIDYA RENTAL</h1>
            </div>
        </div>
        <ul class="p-0">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Cars</a>
            </li>
            <li>
                <a href="#">Transaction</a>
            </li>
            <li>
                <a href="#">Customers</a>
            </li>
        </ul>
    </aside>
</template>

<script></script>
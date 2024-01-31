<script>
import { store } from '../store.js';
import MainCircle from '../components/MainCircle.vue'
export default {
    data() {
        return {
            store
        };
     },
     components: {
        MainCircle,
     },
    methods: {

    }
}
</script>

<template>

    <section class="overlay">
        <div class="title-page-section d-flex flex-column align-items-center">
            <h1>About us</h1>

        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
        </ul>
        </div>
    </section>

<!-- MAIN CIRCLE QUI -->
<MainCircle/>
    <section class="text-center grey-background py-5">
            <div class="container">
                <h3 class="fw-bold">
                    What Are Our Customers Saying ?
                </h3>
                <p>Every customer is valuable to us. Here are the reviews of some of our customers who chose us.</p>
                <div class="row">
                    <div class="col-3">
                        <div class="card border-light carousel_card p-4" style="width: 19rem;">
                            <div class="card_content d-flex flex-column align-items-center">
                                <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                                <div class="quote-container">
                                    <img src="../assets/img/pngegg.png" alt="">
                                </div>
                                <div class="circular-img-container my-5">
                                    <img src="../assets/img/biker4.jpg" alt="...">
                                </div>
                                <p>Michael</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-light carousel_card p-4" style="width: 19rem;">
                            <div class="card_content d-flex flex-column align-items-center">
                                <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                                <div class="quote-container">
                                    <img src="../assets/img/pngegg.png" alt="">
                                </div>
                                <div class="circular-img-container my-5">
                                    <img src="../assets/img/biker4.jpg" alt="...">
                                </div>
                                <p>Michael</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-light carousel_card p-4" style="width: 19rem;">
                            <div class="card_content d-flex flex-column align-items-center">
                                <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                                <div class="quote-container">
                                    <img src="../assets/img/pngegg.png" alt="">
                                </div>
                                <div class="circular-img-container my-5">
                                    <img src="../assets/img/biker4.jpg" alt="...">
                                </div>
                                <p>Michael</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card border-light carousel_card p-4" style="width: 19rem;">
                            <div class="card_content d-flex flex-column align-items-center">
                                <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                                <div class="quote-container">
                                    <img src="../assets/img/pngegg.png" alt="">
                                </div>
                                <div class="circular-img-container my-5">
                                    <img src="../assets/img/biker4.jpg" alt="...">
                                </div>
                                <p>Michael</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


</template>

<style lang="scss" scoped>.title-page-section {
    position: relative;
    min-height: 500px;
    background-image: radial-gradient(transparent 1%, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 100%), url("../assets/img/event2.jpg");
    background-position: top;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    h1 {
        font-size: 55px;
        color: white;
        position: absolute;
        z-index: 2;
        bottom: 170px; 
    }

    ul.breadcrumb {
        padding: 10px 16px;
        list-style: none;
        position: absolute;
        bottom: 120px; 
        z-index: 2;
    }

    ul.breadcrumb li {
        display: inline;
        font-size: 18px;
    }

    ul.breadcrumb li+li:before {
        padding: 8px;
        color: white;
        content: ">\00a0";
    }

    ul.breadcrumb li a {
        color: white; 
        text-decoration: none;
    }
}


.biker-circle{
    position: relative;

}
.biker-circle img:first-child{
    position: absolute;
    z-index: 0;
    top: 10px;
    right: 80px;
}
.biker-circle img:last-child{
    z-index: 10;
}

.rotate {
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-name: rotate;
  animation-timing-function: linear;
}

@keyframes rotate {
  from { transform: rotate(  0deg); }
  to   { transform: rotate(360deg); }
}

.btn-know{
    background-color: black;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 25px 40px;
}
.grey-background {
    background-color: #FBFBFB;
}

.carousel_card {
    width: calc(100% / 5);
    margin: 0 15px;
    position: relative;
    border: none;

    .card_content {
        width: 100%;
        height: 100%;
        flex-grow: 1;
    }

    p {
        font-size: 14px;
        line-height: 2.0;

    }
}

.circular-img-container {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}

.quote-container {
    width: 100px;
    height: 100px;
    position: absolute;

    img {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: contain;
        top: 70px;
        opacity: 0.2;
        transform: rotate(10deg);
    }
}

</style>
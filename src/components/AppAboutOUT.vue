<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
     },
    methods: {

    }
}
</script>

<!-- <template>

    <section class="overlay">
        <div class="title-page-section d-flex flex-column align-items-center">
            <h1>About us</h1>

        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
        </ul>
        </div>
    </section> -->

    <!-- <section class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-8 biker-circle d-flex justify-content-center">
                    <img class="img-fluid reverse rotate" src="../assets/img/bike-circle.png" alt="">
                    <img class="img-fluid" src="../assets/img/bike-player.png" alt="">  
                </div>
                <div class="col-4">
                    <h2 class="fs-2 fw-bold mb-4">
                         Do you want to be a professional cyclist?
                    </h2>
                    <p class="mb-3">
                        We offer 6 courses of varying difficulty and beautiful scenery that cyclists of all levels can enjoy. 
                        You will learn cycling from professionals with our competent and experienced staff. 
                        You will have a lot of fun with our amazing space. <br>
                    </p>
                    <img class="mb-5" src="../assets/img/divider.jpg" alt="">
                    <div class="row">
                        <div class="col-4">
                            <img src="https://img.freepik.com/premium-vector/full-face-helmet-motocross-downhill-mtb-hemet-vector-sketch-ilustration_379823-644.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="col-8">
                            <h3 class="fw-bold">Professional Team</h3>
                            <p class="">
                                We make you professional by adding your sincerity as well as professionalism.
                            </p>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEkXijI-Wb0tmGAK8AhkPkBdb_qm_8FCF5w&usqp=CAU" alt="" class="img-fluid">
                        </div>
                        <div class="col-8">
                            <h3 class="fw-bold">Professional Trainings</h3>
                            <p class="">
                                We always ride with the best equipment, respecting nature and fun.
                            </p>
                        </div>
                    </div>
                        <a class="btn-know" href="#">
                        Get to know us 
                        <i class="fa-solid fa-arrow-right"></i>
                        </a>
                </div>
             </div>
        </div>

    </section> -->


    <!-- <section class="text-center grey-background py-5">
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
-->
<style lang="scss" scoped>

/* .title-page-section {
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
 */
</style>
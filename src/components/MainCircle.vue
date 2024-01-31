<script>
import { store } from '../store.js';
export default {
    data() {
        return {   
            store,
        };
     },
}
</script>

<template>
    <section class="my-5">
        <div class="container-lg container-md container-sm">
            <div class="row justify-content-md-center justify-content-lg-start">
                <div class="col-lg-8 col-md-12 d-flex justify-content-center mb-md-5">
                    <!-- <img class="img-fluid rotate" src="../assets/img/bike-circle.png" alt="">
                    <img class="img-fluid" src="../assets/img/bike-player.png" alt=""> -->
                    <div class="position-relative biker-img">
                        <img class="img-fluid" src="../assets/img/bike-player.png" alt="">
                        <div class="circle-rotate img-fluid z-0">
                            <img class="img-fluid rotate" src="../assets/img/bike-circle.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <h2 class="fs-2 fw-bold mb-4 text-md-center text-lg-start">
                        Do you want to be a professional cyclist?
                    </h2>
                    <p class="mb-3 text-md-center text-lg-start">
                        We offer 6 courses of varying difficulty and beautiful scenery that cyclists of all levels can enjoy. 
                        You will learn cycling from professionals with our competent and experienced staff. 
                        You will have a lot of fun with our amazing space. <br>
                    </p>
                    <img class="mb-5 text-start" src="../assets/img/divider.jpg" alt="">
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <img src="https://img.freepik.com/premium-vector/full-face-helmet-motocross-downhill-mtb-hemet-vector-sketch-ilustration_379823-644.jpg" alt="" class="img-fluid">
                        </div>
                        <div class="col-md-8 col-sm-12">
                            <h3 class="fw-bold">Professional Team</h3>
                            <p class="">
                                We make you professional by adding your sincerity as well as professionalism.
                            </p>
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-md-4 col-sm-12">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEkXijI-Wb0tmGAK8AhkPkBdb_qm_8FCF5w&usqp=CAU" alt="" class="img-fluid">
                        </div>
                        <div class="col-md-8 col-sm-12">
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
    </section>
</template>

<style lang="scss" scoped>
/* .biker-circle{
    position: relative;

} */

.biker-img img{
    position: relative;
    z-index: 999;
}
.circle-rotate{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
}
/* .biker-circle img:first-child{
    position: absolute;
    z-index: 0;
    top: 10px;
    left: 80px;
}
.biker-circle img:last-child{
    z-index: 10;
} */

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
</style>
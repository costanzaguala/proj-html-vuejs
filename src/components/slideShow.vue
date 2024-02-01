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

<template>
    <section id="header-carousel-section">
        <div id="carouselHeader" class="carousel slide carousel-fade mb-5">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/slider-bike-4.jpg" class="d-block w-100" alt="...">
                    <div class="slider-text">
                        <h1>
                            Unforgettable <br>
                            Cycling Experience
                        </h1>
                        <p>Learn cycling from the pros.</p>
                        <a href="#">
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/slider-bike-9.jpg" class="d-block w-100" alt="...">
                    <div class="slider-text">
                        <h1>
                            Professional <br>
                            Cycling Club
                        </h1>
                        <p>Learn cycling from the pros</p>
                        <a href="#">
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/slider-bike-12.jpg" class="d-block w-100" alt="...">
                    <div class="slider-text">
                        <h1>
                            Learn Mountain Bike  <br>
                            From The Expert
                        </h1>
                        <p>Learn cycling from the pros</p>
                        <a href="#">
                            Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselHeader" data-bs-slide="prev">
                <span class="carousel-control-prev-icon rounded" aria-hidden="true">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselHeader" data-bs-slide="next">
                <span class="carousel-control-next-icon rounded" aria-hidden="true">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>

#header-carousel-section{
    margin: 50px 0;
}

.carousel-control-prev-icon, .carousel-control-next-icon{
    background-color: black;
    background-image: none;
    cursor: pointer;
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 1.5rem;

}
.slider-text{
    position: absolute;
    z-index: 999;
    top: 30%;
    left: 20%;
    color: white;
    font-weight: bold;
    h1{
        font-size: 3.5rem; 
    }
    p{
        font-size: 1.1rem;
        margin-bottom: 50px;
    }
    a{
        text-decoration: none;
        color: white;
        background-color: black;
        padding: 25px 50px;
        margin-top: 50px;
    }
}

.carousel-control-prev, .carousel-control-next{
    height: 10%;
    top:50%;
    transform: translateY(-50%);
}
</style>
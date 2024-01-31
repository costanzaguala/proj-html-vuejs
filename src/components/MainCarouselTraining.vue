<script>
import { store } from '../store.js';
import MainCircle from '../components/MainCircle.vue'
import SingleEventCard from '../components/SingleEventCard.vue'
import slideShow from '../components/slideShow.vue'

/* import PackagesPage from './PackagesPage.vue'
import EventsPage from './EventsPage.vue'
import TrainingPage from './TrainingPage.vue' */




import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    data() {
        return {
            store,
            swiperOptions: {
                    breakpoints: {       
                    320: {       
                    slidesPerView: 1,
                    spaceBetween: 10     
                        },          
                    560: {       
                    slidesPerView: 2,       
                    spaceBetween: 50     
                    },
                    992: {       
                    slidesPerView: 3,       
                    spaceBetween: 40     
                    },
                    1200: {       
                    slidesPerView: 4,       
                    spaceBetween: 30     
                    },
                }   
            }
            
        };
     },
     components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
}
</script>


<template>
    <!-- PRIMO CAROSELLO FATTO CON SWIPER-->
    <section id="professionalTrainingsSection watch fade-in" class="swiper-section mb-5 py-3">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold in-page">
                    Our Professional Cycling Trainings
                </h2>
                <p>
                    Learn from the mountain biking expert.
                </p>
            </div>
            <swiper


            :loop="true"
            :breakpoints="swiperOptions.breakpoints"
            :navigation="{ nextEl: '.swiper-button-prev', prevEl: '.swiper-button-next'}"
            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide>
                    <div class="carousel_card">
                        <img class="img-fluid" src="../assets/img/training-box-1.jpg" alt="Training-1">
                        <div class="card_content">
                            <h3>Riding Lesson 1</h3>
                            <a href="#">
                                View
                            </a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel_card">
                        <img class="img-fluid" src="../assets/img/training-box-2.jpg" alt="Training-2">
                        <div class="card_content">
                            <h3>Safe Driving 2</h3>
                            <a href="#">
                                View
                            </a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel_card">
                        <img class="img-fluid" src="../assets/img/training-box-3.jpg" alt="Training-3">
                        <div class="card_content">
                            <h3>Mountain Bike 3</h3>
                            <a href="#">
                                View
                            </a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel_card">
                        <img class="img-fluid" src="../assets/img/training-box-4.jpg" alt="Training-4">
                        <div class="card_content">
                            <h3>Trail Drive 4</h3>
                            <a href="#">
                                View
                            </a>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="carousel_card">
                        <img class="img-fluid" src="../assets/img/training-box-5.jpg" alt="Training-5">
                        <div class="card_content">
                            <h3>Pedaling 5</h3>
                            <a href="#">
                                View
                            </a>
                        </div>
                    </div> 
                </swiper-slide>
            </swiper>
            <div class="d-flex justify-content-center align-items-center">
                <div class="swiper-button-prev me-4" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.carousel_card{
    border: 10px solid black;
    position: relative;
    .card_content{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        h3{
            font-weight: bold;
            font-size: 1.1em;
            color: white;
            padding: 15px;
        }
        a{
            text-decoration: none;
            color: white;
            font-weight: bold;
            background-color: black;
            padding: 10px 20px;
            margin: 15px;
            position: absolute;
            bottom: 10px;
            display: none;
        }
        &:hover{
                background-color: rgb(0, 0, 0, 0.25);
                transition: all 0.3s ease ;
                & a{
                    display: block;
                }
            }
    }
}
.swiper-button-next, .swiper-button-prev {
    position: unset;
    background-color: lightgray;
    color: black;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-top: 50px;
    border: 2px solid black;
    padding: 40px;

    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
    }
}
</style>
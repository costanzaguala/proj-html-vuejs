<script>
import { store } from '../store.js';
import MainCircle from './MainCircle.vue'
import SingleEventCard from './SingleEventCard.vue'

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
            
        };
     },
     components: {
        MainCircle,
        SingleEventCard,
        Swiper,
        SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
    methods: {
        invertGridToLine(){
            store.flagEvents = true
        },
        invertLineToGrid(){
            store.flagEvents = false
        },
    },
}
</script>

<template>
    <router-view></router-view>
    <main class="mb-4">
<!-- Primo carosello -->
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

        
<MainCircle />
       <!--  <section class="text-center mb-5">
            <div class="container">
                <h3 class="fw-bold">
                    Resent New & Articles
                </h3>
                <p>Important information about bike</p>
                <div class="row">
                    <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike5-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div>22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Road bike or mountain bike?</h5>
                                <p class="card-text">Comparated to similar road bikes with a solid fram structure [...]</p>
                                <a href="#" class="btn btn-dark px-4 py-2">More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike6-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div>22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">What is mountain biking called?</h5>
                                <p class="card-text">Mountain biking is one of the most popolar outdoors sports, [...]</p>
                                <a href="#" class="btn btn-dark px-4 py-2">More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike3-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div>22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How much should you cycle a day?</h5>
                                <p class="card-text">In order to get the right benefit from the exercise [...]</p>
                                <a href="#" class="btn btn-dark px-4 py-2">More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike4-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div>22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How long does it take 5 km by bike</h5>
                                <p class="card-text">It takes 5 km and 10 minutes, sir. But at [...]</p>
                                <a href="#" class="btn btn-dark px-4 py-2">More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

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
                :slidesPerView="4"
                :spaceBetween="30"
                :loop="true"

                :navigation="true"
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
            </div>
        </section>

        <!-- Secondo SLIDER FATTO CON SWIPER -->
        <section id="NewArticleSection" class="pb-5 pt-5">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="fw-bold px-5">
                        Resent New & Articles
                    </h2>
                    <p>
                        Important information about bike
                    </p>
                </div>
                <swiper
                :slidesPerView="4"
                :spaceBetween="30"
                :loop="true"
                :modules="modules"
                class="mySwiper"
                >
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike5-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Road bike or mountain bike?</h5>
                                <p class="card-text mb-4">Comparated to similar road bikes with a solid fram structure [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike6-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">What is mountain biking called?</h5>
                                <p class="card-text mb-4">Mountain biking is one of the most popolar outdoors sports, [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike3-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How much should you cycle a day?</h5>
                                <p class="card-text mb-4">In order to get the right benefit from the exercise [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike4-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How long does it take 5 km by bike</h5>
                                <p class="card-text mb-4">It takes 5 km and 10 minutes, sir. But at [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike5-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Road bike or mountain bike?</h5>
                                <p class="card-text mb-4">Comparated to similar road bikes with a solid fram structure [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike6-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">What is mountain biking called?</h5>
                                <p class="card-text mb-4">Mountain biking is one of the most popolar outdoors sports, [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike3-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How much should you cycle a day?</h5>
                                <p class="card-text mb-4">In order to get the right benefit from the exercise [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="col-3">
                        <div class="card" style="width: 18rem;">
                            <img src="../assets/img/news-bike4-300x180.jpg" class="card-img-top px-4 pt-4" alt="...">
                            <div class="text-center">22.06.2022 - Bike</div>
                            <div class="card-body">
                                <h5 class="card-title fw-bold">How long does it take 5 km by bike</h5>
                                <p class="card-text mb-4">It takes 5 km and 10 minutes, sir. But at [...]</p>
                                <div class="d-flex justify-content-center my-3">
                                    <a href="#" class="btn btn-dark px-5 py-3">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </swiper-slide>
                </swiper>

            </div>
        </section>



 

        <!-- <section class="events-container">

    Sezione eventi for-fun

            <div class="container">
                <div class="d-flex justify-content-end mb-3">
                    <button @click="invertLineToGrid()" class="px-2 border-0 me-1 rounded">
                        <i class="fa-solid fa-square"></i>
                    </button>
                    <button @click="invertGridToLine()" class="px-2 bg-dark text-white border-0 rounded">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
                <div class="grid-event-container">
                    <div v-if="store.flagEvents === false" class="row">
                        <div v-for="(cardEvent, i) in store.events" class="col-4">
                            <SingleEventCard
                                :img="cardEvent.img"
                                :name="cardEvent.name"
                                :fDate="cardEvent.firstDate"
                                :lDate="cardEvent.lastDate"
                                :city="cardEvent.city"
                                :type="cardEvent.type"
                            />
                        </div>
                    </div>
                </div>
                <div v-if="store.flagEvents === true" class="inline-event-container">
                    <div class="inline-event row mb-4 border" v-for="(cardEvent, i) in store.events">
                        <div class="col-6">
                            <div class="event-line-img p-3 m-3" 
                            :style="{
                                backgroundImage : 'url(../src/assets/img/' + cardEvent.img + ')',
                                backgroundSize: '100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }">
                            </div>
                        </div>
                        <div class="col-2 d-flex align-items-center justify-content-center">
                            <div class="me-2">
                                <h2 class="display-3 fw-bold">
                                    {{ cardEvent.firstDate.split('@')[0].split('/')[2] }}
                                </h2>
                                
                                <span class="ps-4">
                                    Jun
                                </span>
                            </div>
                            <div class="ms-2">
                                <h2 class="display-3 fw-bold">
                                    {{ cardEvent.lastDate.split('@')[0].split('/')[2] }}
                                </h2>
                                <span class="ps-4">
                                    Aug
                                </span>
                            </div>
                                         
                        </div>
                        <div class="col-4">
                            <h3 class="fw-bold fs-4 pt-3">
                                {{ cardEvent.name }}
                            </h3>
                            <p class="text-black-50 fs-6">
                                <i class="fa-regular fa-clock"></i>
                                {{ cardEvent.firstDate }} {{ cardEvent.lastDate }}
                            </p>
                            <p class="text-black-50 fs-6">
                                <i class="fa-solid fa-location-dot"></i>
                                {{ cardEvent.city }}
                            </p>
                            <span class="rounded px-3 py-2 bg-light border fs-6 text-black-50">
                                {{ cardEvent.type }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
    </main>
</template>

<style lang="scss" scoped>

.fade-in{
    opacity:0;
    transform: translateY(2ovh);
}
.fade-in.in-page{
    opacity: 1;
    transform: translateY(0vh);
}

#header-carousel-section{
    margin: 50px 0;
}
#NewArticleSection{
    background-color: #FBFBFB;
}
.inline-event{
    border: 2px solid black;
}
.inline-event:hover{
    border-left: 10px solid grey;
}
.inline-event-container .row .col-6{
    .event-line-img{
        height: 200px;
        overflow: hidden;
        border: 1px solid black;
    }
}
.card{
    box-shadow: 0 0 10px 0px;
    margin: 20px 10px;
}
.card:hover{
     visibility: visible;
     animation-delay: 1s;
     animation-name: fadeInLeft;
     will-change: transform;
     transform: perspective(300px)
     rotateX(-0.66deg)
     rotateY(1.88deg)
     scale3d(1, 1, 1);
     margin-right: 30px;
}
@keyframes fadeInLeft{
    0% {
    opacity: 0;
    -webkit-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
}
100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}
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

.carousel-control-prev, .carousel-control-next{
    height: 10%;
    top:50%;
    transform: translateY(-50%);
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
.biker-circle{
    position: relative;

}
.biker-circle img:first-child{
    position: absolute;
    z-index: 0;
    top: 10px;
    left: 80px;
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

.second-carousel{
    width: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
}
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

.button_prev, .button_next{
    width: 60px;
    height: 60px;
    line-height: 60px;
    font-size: 1.2em;
    border: 2px solid black;
    &:hover{
        background-color: grey;
        cursor: pointer;
    }
}
</style>
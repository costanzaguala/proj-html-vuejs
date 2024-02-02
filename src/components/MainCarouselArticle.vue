<script>
import { store } from '../store.js';

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
            :breakpoints="swiperOptions.breakpoints"
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
</template>

<style lang="scss" scoped>

#NewArticleSection{
    background-color: #FBFBFB;
}
// Card New Article
.card{
    box-shadow: 0 0 10px 0px;
    margin: 20px 10px;
    min-height: 425px;
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
     cursor:grab
}
.card:active{
    cursor: grabbing
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
</style>
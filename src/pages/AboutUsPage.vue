<script>
import { store } from '../store.js';
import MainCircle from '../components/MainCircle.vue'

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

    <section class="overlay">
        <div class="title-page-section d-flex flex-column align-items-center">
            <h1>About us</h1>

        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
        </ul>
        </div>
    </section>

    <section id="expert-staff" class="swiper-section py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold in-page pt-3">Our Expert Staff</h2>
                <p>Learn golf from the pros.</p>
            </div>

            <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :loop="true"
            :freeMode="true" 


            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide>
                    <div class="card">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="../assets/img/biker4.jpg" alt="">
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>Robert Lee</p>
                                <p>Biker</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="../assets/img/biker4.jpg" alt="">
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>Robert Lee</p>
                                <p>Biker</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="../assets/img/biker4.jpg" alt="">
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>Robert Lee</p>
                                <p>Biker</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="../assets/img/biker4.jpg" alt="">
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>Robert Lee</p>
                                <p>Biker</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img src="../assets/img/biker4.jpg" alt="">
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>Robert Lee</p>
                                <p>Biker</p>
                                <div class="d-flex align-items-center">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>




    <section id="customer-review" class="swiper-section py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold in-page pt-3">
                    What Are Our Customers Saying ?</h2>
                <p>Every customer is valuable to us. Here are the reviews of some of our customers who chose us.</p>
            </div>

            <swiper
            :slidesPerView="4"
            :spaceBetween="30"
            :loop="true"
            :freeMode="true" 


            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center p-4">
                            <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img src="../assets/img/biker4.jpg" alt="...">
                            </div>
                            <p class="card-text">Cristian</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center p-4">
                            <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img src="../assets/img/biker4.jpg" alt="...">
                            </div>
                            <p class="card-text">Jane</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center p-4">
                            <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img src="../assets/img/biker4.jpg" alt="...">
                            </div>
                            <p class="card-text">Michael</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center p-4">
                            <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img src="../assets/img/biker4.jpg" alt="...">
                            </div>
                            <p class="card-text">Michael</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center p-4">
                            <p class="card-text pt-3">I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img src="../assets/img/biker4.jpg" alt="...">
                            </div>
                            <p class="card-text">Michael</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
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

#customer-review {
    background-color: #FBFBFB;

}

.carousel_card {
    margin: 0 10px;
    position: relative;
    border: none;

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
        bottom: 50px;
        opacity: 0.2;
        transform: rotate(10deg);
    }
}
#expert-staff {

    img{
        width: 100%
    }
    .card {
        border: 10px solid #fbfbfb;

    }
}

.black-section {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 120px;
    bottom: 0;
    color: white;
    line-height: 0.5;
    
    i{
        color: white;
        padding: 5px
    }

    > p:nth-child(2) {
        color: grey;
    }
}
</style>
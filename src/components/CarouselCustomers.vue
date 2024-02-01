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
        customersReview: [
            {
                review: "I really wanted to ride a mountain bike. But I couldn't do it because l had no education. Now I can do mountain sports professionally. Thank you so much",
                image: "biker4.jpg",
                name: "Jane"
            },
            {
                review: "Cycling in the city is my hobby. And from the moment I became a member of this club, I am constantly experiencing adventures. I would recommend it to everyone.",
                image: "biker4.jpg",
                name: "Michael"
            },
            {
                review: "I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.",
                image: "biker4.jpg",
                name: "Cristian"
            },
            {
                review: "I really wanted to ride a mountain bike. But I couldn't do it because l had no education. Now I can do mountain sports professionally. Thank you so much",
                image: "biker4.jpg",
                name: "Jane"
            }
        ]
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

    methods: {
		getImagePath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},

    }


};

</script>

<template>

    
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
            :breakpoints="{
                '390': {
            slidesPerView: 1,
            spaceBetween: 20,
            },
                '640': {
            slidesPerView: 1,
            spaceBetween: 20,
            },
                '768': {
            slidesPerView: 2,
            spaceBetween: 40,
            },
                '992px': {
            slidesPerView: 3,
            spaceBetween: 50,
             },
                '1200': {
            slidesPerView: 3,
            spaceBetween: 50,
             },
                '1400': {
            slidesPerView: 4,
            spaceBetween: 50,
             },
            }"


            :modules="modules"
            class="mySwiper"
            >
                <swiper-slide v-for="(elem, i) in customersReview" >
                    <div class="card border-white">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center py-5 px-3 ">
                            <p class="card-text"> {{ elem.review }}</p>
                            <div class="quote-container">
                                <img src="../assets/img/pngegg.png" alt="">
                            </div>
                            <div class="circular-img-container my-5">
                                <img :src="getImagePath('../assets/img/' + elem.image)" alt="">
                            </div>
                            <p class="card-text"> {{ elem.name }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>

</template>

<style lang="scss" scoped>

.mySwiper {
    height: 700px;
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


</style>
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
            Experts: [

            {
                image: "biker1.jpg",
                name: "Michael Lee",
                profession: "Biker",
            },

            {
                image: "biker2.jpg",
                name: "Robert Lee",
                profession: "Biker",
            },

            {
                image: "biker3.jpg",
                name: "John Doe",
                profession: "Biker",
            },

            {
                image: "biker4.jpg",
                name: "Emily Brown",
                profession: "Biker",
            },
            {
                image: "biker4.jpg",
                name: "Emily Brown",
                profession: "Biker",
            },

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

    methods:{
		getImagePath: function(imgPath){
			return new URL(imgPath, import.meta.url).href;
		},
	}
   
};


</script>

<template>

    <section id="expert-staff" class="swiper-section py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold in-page pt-3">Our Expert Staff</h2>
                <p>Learn golf from the pros.</p>
            </div>

            <swiper
            
            :slidesPerView="4"
            :spaceBetween="20"
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
                <swiper-slide v-for="(elem, i) in Experts">
                    <div class="card">
                        <div class="card_content text-center d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img :src="getImagePath('../assets/img/' + elem.image)" alt="" >
                            </div>
                            <div class="black-section d-flex flex-column align-items-center justify-content-center">
                                <p>
                                    {{ elem.name }}
                                </p>
                                <p>
                                    {{ elem.profession }}
                                </p>
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

</template>

<style lang="scss" scoped>


#expert-staff {

    img{
        width: 100%;
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
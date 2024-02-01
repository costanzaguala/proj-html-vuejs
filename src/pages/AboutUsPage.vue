<script>
import { store } from '../store.js';
import MainCircle from '../components/MainCircle.vue';
import CarouselExpertTrainers from '../components/carouselExpertTrainers.vue'
import CarouselCustomers from '../components/CarouselCustomers.vue'

// IMPORT SWIPER
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
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
    CarouselExpertTrainers,
    CarouselCustomers,
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
    
        <div class="title-page-section">
            <div class="d-flex justify-content-center">
                <h1>About us</h1>

                <ul class="breadcrumb">
                    <li>
                        <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
                    </li>
                    <li>
                        <i class="fa-solid fa-chevron-right"></i>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }" class="nav-link active">About Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <MainCircle/>
    <CarouselExpertTrainers/>
    <CarouselCustomers/>

</template>

<style lang="scss" scoped>
.title-page-section {
    position: relative;
    min-height: 500px;
    background-image: radial-gradient(transparent 1%, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 100%), url("../assets/img/event2.jpg");
    background-position: top;
    background-size: cover;

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
        bottom: 170px; 
        z-index: 2;
    }
    
    ul.breadcrumb {
    font-size: 18px;
    color: white;
    list-style: none;
    position: absolute;
    bottom: 130px; 
    z-index: 2;
    }

    ul.breadcrumb li {
        padding-right: 10px;
    }
}

</style>
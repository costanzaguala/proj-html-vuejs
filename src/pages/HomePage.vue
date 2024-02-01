<script>
import { store } from '../store.js';
import MainCircle from '../components/MainCircle.vue'
/* import SingleEventCard from '../components/SingleEventCard.vue' */
import slideShow from '../components/slideShow.vue'
import MainCarouselTraining from '../components/MainCarouselTraining.vue'
import MainCarouselArticle from '../components/MainCarouselArticle.vue'
import AppEvents from '../components/AppEvents.vue';
import AppPackages from '../components/AppPackages.vue';
import CarouselExpertTrainers from '../components/CarouselExpertTrainers.vue'



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
            
        };
     },
     components: {
        MainCircle,
        /* SingleEventCard, */
        slideShow,
        MainCarouselTraining,
        MainCarouselArticle,
        AppEvents,
        CarouselExpertTrainers,
        AppPackages,
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

<template >
    
    <!-- CAROSELLO HEADER SlideShow HEADER-->
        <slideShow />

    <!-- COMPONENTE BIKER-CIRCLE -->
        <MainCircle />

    <!-- PRIMO CAROSELLO FATTO CON SWIPER TrainingCarousel-->
        <MainCarouselTraining />

        <!-- Componente eventi -->
        <AppEvents />

        <!-- Componente TRAINERS -->
        <CarouselExpertTrainers />

        <!-- Componente Packages -->
        <AppPackages />

            
        
    <!-- Secondo SLIDER FATTO CON SWIPER ArticleCarousel-->
        <MainCarouselArticle />
        
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

</template>

<style lang="scss" scoped>

.fade-in{
    opacity:0;
    transform: translateY(2vh);
}
.fade-in.in-page{
    opacity: 1;
    transform: translateY(0vh);
}
/* .inline-event{
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
} */

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
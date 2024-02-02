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
        <div class="scroll-watcher"></div>
        

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

.scroll-watcher{
    height: 5px;
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: black;
    width: 100%;
    scale: 0 1;
    transform-origin: left;
    animation: scroll-watcher linear;
    animation-timeline: scroll(y);
}
@keyframes scroll-watcher{
    to { scale: 1 1;}
}
</style>
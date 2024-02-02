<script>
import { store } from '../store.js';
import AppEvents from '../components/AppEvents.vue';
import AppLoaderPage from '../components/AppLoaderPage.vue';
export default {
    data() {
        return {
            store
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
    props:{
        img: String,
        name: String,
        fDate: String,
        lDate: String,
        city: String,
        type: String,
    },
    components:{
        AppEvents,
        AppLoaderPage
    }
}
</script>

<template>
    
    <section class="overlay my-5">
        <AppLoaderPage />
    <div class="title-page-section">
        <div class="d-flex justify-content-center">
            <h1>Events</h1>

            <ul class="breadcrumb">
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
                </li>
                <li>
                    <i class="fa-solid fa-chevron-right"></i>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link active">Eventi</router-link>
                </li>
            </ul>
        </div>
    </div>
</section>

    <!--EVENTI-->
    <AppEvents/>
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




/* 
.cont-events-riga{
    margin-top: 200px;
    margin-bottom: 50px;
}
.cont-riga{
    border: solid;
    border-style: groove;
    padding: 20px;
}
.img-riga{
    position: relative;
    overflow: hidden;
    width: 600px;
    height: 170px;
    border-radius: 5px;
}
.img-riga > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover
}

.data-riga {
    padding-top: 20px;
    padding-left: 20px;
    
    margin-top: -3px;
}
.data{
    font-size: 80px;
    line-height: 80px;
    font-weight: 600;
    color: #000000;
}
.f-month{
    margin-top: -20px;
    margin-left: 30px;
}
.s-month{
    margin-top: -43px;
    margin-left: 150px;
}
.information-riga{
    padding-top: 100px;
}
//qui

.inline-event-container .row .col-6{
    .event-line-img{
        height: 200px;
        overflow: hidden;
        border: 1px solid black;
    }
}

.grid-event-container .row .col-4{
    .event-grid-img{
        
        border: 1px;
        background-size: cover;
    }
}
.inside-card-date{
    background-color: white;
    margin-top: 30px;
    margin-left: 10px;
    width: 70px;
    height: 70px;
    text-align: center;
    border-radius: 10%;
}
.inside-card-date{
    display: flex;
    align-items: center;
    justify-content: center;
}

.inside-card-date > p {
    text-align: center;
} */
</style>
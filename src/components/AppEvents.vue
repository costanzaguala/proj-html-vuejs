<script>
import { store } from '../store.js';
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
    }
}
</script>

<template>

    <!--EVENTI-->

    <!--GRIGLIA A "RIGHE"-->
    <section>
        <div class="container">
                <div class="d-flex justify-content-end mb-3">
                    <button @click="invertLineToGrid()" class="px-2 border-0 me-1 rounded">
                        <i class="fa-solid fa-square"></i>
                    </button>
                    <button @click="invertGridToLine()" class="px-2 bg-dark text-white border-0 rounded">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                </div>
                <div class="grid-event-container" v-if="store.flagEvents === false">
                    <div class="row">
                        <div class="col-md-4 mb-3" v-for="(cardEvent, i) in store.events">
                            <div class="event-grid-img card" 
                            :style="{backgroundImage : 'url(../src/assets/img/' + cardEvent.img + ')',backgroundPosition: 'center', height: '300px', width: '100%', backgroundSize: 'cover'}">
                                <div class="inside-card-date">
                                    <p class="text-dark">
                                        {{ firstDate }}
                                    </p>
                                </div>
                            </div>
                            <div class="card-details">
                                <div class="title-card-details">
                                    <h2>
                                        {{ cardEvent.name }}
                                    </h2>
                                </div>
                                <div class="date-card-details">
                                    <span> <i class="fa-regular fa-clock"></i> {{ cardEvent.firstDate }} - </span>
                                    <span> {{ cardEvent.lastDate }}</span>
                                </div>
                                <div class="position-card-details">
                                    <span> <i class="fa-solid fa-location-dot"></i> {{ cardEvent.city }}</span>
                                </div>
                                <div class="type-card-details">
                                    <span> {{ cardEvent.type }}</span>
                                </div>
                            </div>
                        </div>   
                    </div>  
                </div>
                <div v-if="store.flagEvents === true" class="inline-event-container">
                    <div class="inline-event row mb-4 border" v-for="(cardEvent, i) in store.events">
                       <div class="col-6">
                            <div class="event-line-img p-3 m-3" 
                                :style="{backgroundImage : 'url(../src/assets/img/' + cardEvent.img + ')',backgroundSize: '100%',backgroundPosition: 'center'}">
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
    </section>
</template>

<style lang="scss" scoped>

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
}
</style>
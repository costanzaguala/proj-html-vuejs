<script>
export default {
    data() {
        return {
            inactiveCard: 4,
            events:[
                {
                    firstDate: '2022/06/22 - 01:30',
                    lastDate: '2024/08/23 - 7:00',
                    name: "Toronto Cycling Event 2023",
                    city: 'Toronto',
                    type: 'Bicycle Race',

                },
                {
                    firstDate: '2022/06/22 - 01:30',
                    lastDate: '2024/08/23 - 7:00',
                    name: "Istanbul Cycling Event 2023",
                    city: 'Istanbul',
                    type: 'Bike Sport',
                },
                {
                    firstDate: '2022/06/30 - 01:30',
                    lastDate: '2024/11/08 - 16:30',
                    name: "Paris Cycling Event 2023",
                    city: 'Parisi',
                    type: 'Cycling Tour',

                },
                
                {
                    firstDate: '2022/06/25 - 03:00',
                    lastDate: '2024/08/24 - 5:30',
                    name: "New Jersey Cycling Event 2023",
                    city: 'New Jersey',
                    type: 'Bicycle Race',

                }
            ] 
        };
     },
    methods: {
        prevButtonCard(){
            console.log(this.inactiveCard)
            if(this.inactiveCard > 0){
                this.inactiveCard--
            } else if (this.inactiveCard == 0){
                this.inactiveCard = 4
            } else {
                this.inactiveCard++
            }
        },
        nextButtonCard(){
            console.log(this.inactiveCard)
            if(this.inactiveCard < 4){
                this.inactiveCard++
            } else if (this.inactiveCard == 4){
                this.inactiveCard = 0
            } else {
                this.inactiveCard--
            }
        }
    }
}
</script>

<template>
    <main class="mb-4">
        <!-- Primo carosello -->
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon rounded" aria-hidden="true">
                    <i class="fa-solid fa-chevron-left"></i>
                </span>
                
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon rounded" aria-hidden="true">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <section class="my-5">
            <div class="container">
                <div class="row">
                    <div class="col-8 biker-circle d-flex justify-content-center">
                        <img class="img-fluid reverse rotate" src="../assets/img/bike-circle.png" alt="">
                        <img class="img-fluid" src="../assets/img/bike-player.png" alt="">
                        
                    </div>
                    <div class="col-4">
                        <h2 class="fs-2 fw-bold mb-4">
                            Do you want to be a professional cyclist?
                        </h2>
                        <p class="mb-3">
                            We offer 6 courses of varying difficulty and beautiful scenery that cyclists of all levels can enjoy. 
                            You will learn cycling from professionals with our competent and experienced staff. 
                            You will have a lot of fun with our amazing space. <br>
                        </p>
                        <img class="mb-5" src="../assets/img/divider.jpg" alt="">
                        <div class="row">
                            <div class="col-4">
                                <img src="https://img.freepik.com/premium-vector/full-face-helmet-motocross-downhill-mtb-hemet-vector-sketch-ilustration_379823-644.jpg" alt="" class="img-fluid">
                            </div>
                            <div class="col-8">
                                <h3 class="fw-bold">Professional Team</h3>
                                <p class="">
                                    We make you professional by adding your sincerity as well as professionalism.
                                </p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEkXijI-Wb0tmGAK8AhkPkBdb_qm_8FCF5w&usqp=CAU" alt="" class="img-fluid">
                            </div>
                            <div class="col-8">
                                <h3 class="fw-bold">Professional Trainings</h3>
                                <p class="">
                                    We always ride with the best equipment, respecting nature and fun.
                                </p>
                            </div>
                        </div>
                        <a class="btn-know" href="#">
                            Get to know us 
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
         <!-- Secondo carosello -->
         <section class="mb-5">
            <h2 class="text-center fw-bold mt-4 mb-2">
                Our Professional Cycling Trainings
            </h2>
            <p class="text-center mb-4">
                Learn from the mountain biking expert.
            </p>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="carousel-container d-flex flex-wrap justify-content-between pb-5">
                            <div v-if="inactiveCard != 0" class="carousel_card">
                                <img class="img-fluid" src="../assets/img/training-box-1.jpg" alt="Training-1">
                                <div class="card_content">
                                    <h3>Riding Lesson</h3>
                                    <a href="#">
                                        View
                                    </a>
                                </div>
                            </div>
                            <div v-if="inactiveCard != 1" class="carousel_card">
                                <img class="img-fluid" src="../assets/img/training-box-2.jpg" alt="Training-2">
                                <div class="card_content">
                                    <h3>Safe Driving</h3>
                                    <a href="#">
                                        View
                                    </a>
                                </div>
                            </div>
                            <div v-if="inactiveCard != 2" class="carousel_card">
                                <img class="img-fluid" src="../assets/img/training-box-3.jpg" alt="Training-3">
                                <div class="card_content">
                                    <h3>Mountain Bike</h3>
                                    <a href="#">
                                        View
                                    </a>
                                </div>
                            </div>
                            <div v-if="inactiveCard != 3" class="carousel_card">
                                <img class="img-fluid" src="../assets/img/training-box-4.jpg" alt="Training-4">
                                <div class="card_content">
                                    <h3>Trail Drive</h3>
                                    <a href="#">
                                        View
                                    </a>
                                </div>
                            </div>
                            <div v-if="inactiveCard != 4" class="carousel_card">
                                <img class="img-fluid" src="../assets/img/training-box-5.jpg" alt="Training-5">
                                <div class="card_content">
                                    <h3>Pedaling</h3>
                                    <a href="#">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="button_prev" @click="prevButtonCard()">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="button_next ms-4" @click="nextButtonCard()">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
        <section class="text-center">
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
        </section>
    </main>
</template>

<style lang="scss" scoped>
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
    right: 35px;
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
.carousel_card{
    width: calc(100% / 5);
    margin: 0 15px;
    border: 6px solid black;
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
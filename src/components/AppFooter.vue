<script>
export default {
    data() {
        return {
            footerTrainings:[
                'Riding Lesson',
                'Safe Driving',
                'Mountain Bike',
                'Trail Drive',
                'Pedaling',
            ],
            footerQuickLinks:[
                'Home',
                'About Us',
                'Blog',
                'Packages',
                'Contact',

            ]
        };
     },
    methods: {

    }
}
</script>

<template>
    <footer class="bg-black text-white">
        <div class="container-md">
            <div class="row justify-content-sm-center justify-content-lg-start">
                <div class="col-lg-3 col-sm-12">
                    <div class="footer-image px-5">
                        <img class="img-fluid" src="../assets/img/logo-footer-gobike.png" alt="">
                    </div>
                    <div class="ps-2 text-center text-lg-start">
                        <i class="fa-solid fa-location-dot fa-2xl"></i>
                        New Jersey, USA
                    </div>
                    <div class="text-center text-lg-start">
                        <i class="fa-solid fa-phone-volume fa-2xl"></i>
                        +1(234)567 89 10
                    </div>
                    <div class="pb-0 text-center text-lg-start">
                        <i class="fa-regular fa-envelope fa-2xl"></i>
                        example@expample.com
                    </div>
                    <div>
                        <a href="">
                            <i class="fa-brands fa-facebook-f fa-2xl"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-instagram fa-2xl"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-twitter fa-2xl" style="color: #ffffff;"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-5 col-sm-12 px-5">
                    <h3 class="pt-5 mb-3 text-sm-center text-lg-start">
                        Join Our Newsletter
                    </h3>
                    <p class="mb-5 text-sm-center text-lg-start">Subscribe to receive useful information</p>
                    <input class="py-4 px-4 w-100 rounded mb-1" type="text" placeholder="Your Email Address">
                    <button class="w-100 py-4 rounded-top">
                        Subscribe
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div class="col-lg-2 col-sm-auto px-3 py-5 text-sm-center text-lg-start">
                    <h3 class="fw-bold mb-4 px-3">Trainings</h3>
                    <ul class="list-unstyled px-3">
                        <li class="mb-3 text-start ps-sm-4 ps-lg-0" v-for="(elem, i) in footerTrainings">
                            <a href="">
                                <span></span> {{ elem }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-auto px-3 py-5 text-sm-center text-lg-start">
                    <h3 class="fw-bold mb-4 px-3">Quick Links</h3>
                    <ul class="list-unstyled px-3  text-sm-start ps-sm-4 ps-lg-0 text-center">
                        <li class="mb-3" v-for="(elem, i) in footerQuickLinks">
                            <a class="mb-4" href="">
                                <span class="d-none d-md-inline-block"></span> {{ elem }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center py-4">
                <i class="fa-regular fa-copyright"></i>
                2023 Gobike - All Rights Reserved.
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.col-lg-3{
    padding: 5px 15px;
}
.col-lg-3 > *{
    padding: 20px 5px;
    i{
        margin-right: 20px;
    }
}
.col-lg-3 a{
    text-decoration: none;
    color: white;
    border: 1px solid grey;
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: calc((100% / 3) - 10px);
    text-align: center;
    padding-left: 15px;
    margin: 5px;
}
.col-lg-2 a{
    text-decoration: none;
    color: white;
    
    span{
        display: inline-block;
        width: 10px;
        height: 4px;
        background-color: white;
        margin-bottom: 3px;
        margin-right: 10px;
    }
}
</style>
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
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="footer-image px-5">
                        <img class="img-fluid" src="../assets/img/logo-footer-gobike.png" alt="">
                    </div>
                    <div class="ps-2">
                        <i class="fa-solid fa-location-dot fa-2xl"></i>
                        New Jersey, USA
                    </div>
                    <div>
                        <i class="fa-solid fa-phone-volume fa-2xl"></i>
                        +1(234)567 89 10
                    </div>
                    <div class="pb-0">
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
                <div class="col-5 px-5">
                    <h3 class="pt-5 mb-3">
                        Join Our Newsletter
                    </h3>
                    <p class="mb-5">Subscribe to receive useful information</p>
                    <input class="py-4 px-4 w-100 rounded mb-1" type="text" placeholder="Your Email Address">
                    <button class="w-100 py-4 rounded-top">
                        Subscribe
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div class="col-2 px-3 py-5">
                    <h3 class="fw-bold mb-4 px-3">Trainings</h3>
                    <ul class="list-unstyled px-3">
                        <li class="mb-3" v-for="(elem, i) in footerTrainings">
                            <a href="">
                                <span></span> {{ elem }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 px-3 py-5">
                    <h3 class="fw-bold mb-4 px-3">Quick Links</h3>
                    <ul class="list-unstyled px-3">
                        <li class="mb-3" v-for="(elem, i) in footerQuickLinks">
                            <a class="mb-4" href="">
                                <span></span> {{ elem }}
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
.col-3{
    padding: 5px 15px;
}
.col-3 > *{
    padding: 20px 5px;
    i{
        margin-right: 20px;
    }
}
.col-3 a{
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
.col-2 a{
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
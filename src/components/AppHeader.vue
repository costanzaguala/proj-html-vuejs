<script>
export default {
    data() {
        return {
             
        };
     },
    methods: {

    }
}
</script>

<template> 

    <header class="fixed-top">
        <nav class="navbar d-flex flex-nowrap align-items-center justify-content-center">
            <div class="d-flex navbar-expand-lg m-0 align-items-center justify-content-center">

                <img class="mx-5" src="../assets/img/logo-gobike.png" alt="logo">

                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">

                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                            <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
                            </li>

                            <li class="nav-item">
                                <!-- <a class="nav-link active" href="#">About us</a> -->
                                <router-link :to="{ name: 'about' }" class="nav-link active">About Us</router-link>
                            </li>

                            <li class="nav-item dropdown">
                            <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Training
                            </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Riding Lesson</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Safe Driving</a></li>
                                    <li><a class="dropdown-item" href="#">Mountain Bike</a></li>
                                    <li><a class="dropdown-item" href="#">Trail Drive</a></li>
                                    <li><a class="dropdown-item" href="#">Pedaling</a></li>
                                    <li><a class="dropdown-item" href="#">All Training</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <!-- <a class="nav-link active" href="#">Packages</a> -->
                                <router-link :to="{ name: 'packages' }" class="nav-link active">Packages</router-link>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="#">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            
            <div class="d-flex align-items-center">

            <button class="navbar-toggler mx-5 d-none d-lg-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
      
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                         </li>
                    </ul>
                </div>
            </div>

            <div class="d-none d-lg-flex">
                <div class="button-upcoming-events d-flex align-items-center">
                    <img src="../assets/img/racing-helmet.png" alt="">
                     <p>
                        <router-link :to="{ name: 'events'}" class="text-white text-decoration-none fw-bold">Upcoming events</router-link>
                    </p>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

        </div>

        </nav> 

        
    </header>

</template>

<style lang="scss" scoped>

header {
    background-color: white;
}

img {
    width: 220px;
}

.navbar {
    margin: 0 100px;
}

.navbar-expand-lg .offcanvas {
    flex-grow: 0;
}

.nav-item {
    padding: 0 10px;
}

.button-upcoming-events {
    background-color: black;
    color: white;
    padding: 20px;
}

.button-upcoming-events img {
    width: 50px;
}

.button-upcoming-events > * {
    margin: 0 5px;
}

p {
    margin-bottom: 0;
}

#second-button {
    border-bottom: 1px solid black;
}

.navbar-toggler {
    margin: 20px;
  }

@media (max-width: 991.98px) {
    .d-lg-flex {
      display: none !important; 
    }
  }

  .navbar-toggler {
    margin: 20px;
  }
</style>

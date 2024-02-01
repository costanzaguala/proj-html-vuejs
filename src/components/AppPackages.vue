<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store
        };
     },
    methods: {

    }
}
</script>

<template>

    <!--PACKAGES-->
    <div class="container packages">

      <!--SPECIAL PACKS-->
      <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto special-packs-header">
                    <div class="packs-img-container bg-black">
                        <i class="fa-solid fa-medal"></i>
                    </div>
                    <h1>
                        Special Packs
                    </h1>
                    <p>
                        Select pricing plan to get more
                    </p>
                </div>
            </div>
      </section>

      <!--CARD DEI PACKAGES-->
      <div class="row ">
          
        <div class="col d-flex justify-content-around">

          <div class="card shadow-sm carta-flippata">
            <div class="carta-flippata-inner bg-black">
              <div class="carta-flippata-front bg-black text-white">
                <div class="text-white retro-card">
                  <h5>
                  BASIC
                 </h5>
                 <h4>
                  $1800
                 </h4>
                 <button class="btn text-white">
                  Send request!
                 </button>
                </div>
              </div>
              <div class="carta-flippata-back">
                <div class="bg-black text-white packs-cards-header">
                  <div class="icon">
                    <i class="fa-regular fa-handshake"></i>
                  </div>
                  <h5>
                    Basic
                  </h5>
                  <p>
                  Learn to ride a bike from the professionals
                  </p>
                </div>
                <div class="card-body packs-card bg-white">
                  <ul class="packs-cards-list">
                    <li>
                      Phone Mountaineer bike training
                    </li>
                    <li>
                      Remote Excellent bike service
                    </li>
                    <li>
                    Onsite Safe cycling training 
                    </li>
                    <li>
                      Saafety helmet on bike
                    </li>
                    <li>
                      Free bikes for children
                    </li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

          <div class="card shadow-sm carta-flippata">
            <div class="carta-flippata-inner bg-black">
              <div class="carta-flippata-front bg-black text-white">
                <div class="text-white retro-card">
                  <h5>
                  BASIC
                 </h5>
                 <h4>
                  $1800
                 </h4>
                 <button class="btn text-white">
                  Send request!
                 </button>
                </div>
              </div>
              <div class="carta-flippata-back">
                <div class="bg-black text-white packs-cards-header">
                  <div class="icon">
                    <i class="fa-regular fa-handshake"></i>
                  </div>
                  <h5>
                    Basic
                  </h5>
                  <p>
                  Learn to ride a bike from the professionals
                  </p>
                </div>
                <div class="card-body packs-card bg-white">
                  <ul class="packs-cards-list">
                    <li>
                      Phone Mountaineer bike training
                    </li>
                    <li>
                      Remote Excellent bike service
                    </li>
                    <li>
                    Onsite Safe cycling training 
                    </li>
                    <li>
                      Saafety helmet on bike
                    </li>
                    <li>
                      Free bikes for children
                    </li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

          <div class="card shadow-sm carta-flippata">
            <div class="carta-flippata-inner bg-black">
              <div class="carta-flippata-front bg-black text-white">
                <div class="text-white retro-card">
                  <h5>
                  BASIC
                 </h5>
                 <h4>
                  $1800
                 </h4>
                 <button class="btn text-white">
                  Send request!
                 </button>
                </div>
              </div>
              <div class="carta-flippata-back">
                <div class="bg-black text-white packs-cards-header">
                  <div class="icon">
                    <i class="fa-regular fa-handshake"></i>
                  </div>
                  <h5>
                    Basic
                  </h5>
                  <p>
                  Learn to ride a bike from the professionals
                  </p>
                </div>
                <div class="card-body packs-card bg-white">
                  <ul class="packs-cards-list">
                    <li>
                      Phone Mountaineer bike training
                    </li>
                    <li>
                      Remote Excellent bike service
                    </li>
                    <li>
                    Onsite Safe cycling training 
                    </li>
                    <li>
                      Saafety helmet on bike
                    </li>
                    <li>
                      Free bikes for children
                    </li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>

        </div>

      </div>

    </div>
    
</template>

<style lang="scss" scoped>
.special-packs-header > h1{
    font-weight: bold;
}
.packages{
        margin-top: 50px;
    }

    .packs-img-container{
      height: 100px;
      width: 100px;
      margin-left: 270px;
      padding: 5px;
      padding-top: 10px;
      border-radius: 10px;
    }
    .packs-img-container > * {
      font-size: 70px;
      color: white;
    }
    .packs-cards-header > h5{
      font-size: 2em;
      text-align: center;
    }
    .carta-flippata > *{
      text-align: center;
    }
    .icon > *{
      font-size: 75px;
    }

    li {
      list-style-type: none;
    }
    .packs-cards-list{
      background-color: white;
    }
    .packs-cards-list > li {
      text-align: center;
      padding: 10px;
    }
    //FLIP CARTA
    .carta-flippata{
  perspective: 1000px;
  background-color: transparent;
}
.carta-flippata-inner{
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.carta-flippata .carta-flippata-inner:hover{
  transform: rotateY(180deg);
}

.carta-flippata-front:hover {
  transform: rotateY(180deg);
  display: none;
}
.carta-flippata-front, .carta-flippata-back {
  backface-visibility: hidden;

}
.carta-flippata-front {
  transform: rotateY(180deg);
}
</style>
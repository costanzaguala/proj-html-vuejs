<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

export default {
  data() {
    return {
      customersReview: [
        {
          review: "I really wanted to ride a mountain bike. But I couldn't do it because I had no education. Now I can do mountain sports professionally.",
          image: "biker4.jpg",
          name: "Jane"
        },
        {
          review: "Cycling in the city is my hobby since I became a member of this club; I am constantly experiencing adventures.",
          image: "biker4.jpg",
          name: "Michael"
        },
        {
          review: "I just couldn't get enough of riding a bike. And I signed up here. A friendly and competent team. Thank you for everything.",
          image: "biker4.jpg",
          name: "Cristian"
        },
        {
          review: "I really wanted to ride a mountain bike. But I couldn't do it because I had no education. Now I can do mountain sports professionally.",
          image: "biker4.jpg",
          name: "Jane"
        },
        {
          review: "I really wanted to ride a mountain bike. But I couldn't do it because I had no education. Now I can do mountain sports professionally.",
          image: "biker4.jpg",
          name: "Jane"
        }
      ]
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },

  methods: {
    getImagePath: function(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  }
};
</script>

<template>
  <section id="customer-review" class="swiper-section py-5">
    <div class="container mySwiper">
      <div class="text-center mb-5">
        <h2 class="fw-bold in-page pt-3">What Are Our Customers Saying ?</h2>
        <p>Every customer is valuable to us. Here are the reviews of some of our customers who chose us.</p>
      </div>

      <swiper
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :free-mode="true" 
        :breakpoints="{
          '390': { slidesPerView: 1, spaceBetween: 20 },
          '640': { slidesPerView: 1, spaceBetween: 20 },
          '768': { slidesPerView: 2, spaceBetween: 40 },
          '992': { slidesPerView: 3, spaceBetween: 50 },
          '1200': { slidesPerView: 3, spaceBetween: 50 },
          '1400': { slidesPerView: 4, spaceBetween: 50 }
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(elem, i) in customersReview" :key="i">
          <div class="card border-white">
            <div class="card_content text-center d-flex flex-column align-items-center justify-content-between h-100 py-5 px-3">
              <p class="card-text">{{ elem.review }}</p>
              <div class="quote-container">
                <img src="../assets/img/pngegg.png" alt="">
              </div>
              <div class="circular-img-container my-5">
                <img :src="getImagePath('../assets/img/' + elem.image)" alt="">
              </div>
              <p class="card-text">{{ elem.name }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#customer-review {
  background-color: #FBFBFB;

  @keyframes rollIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.mySwiper {
  height: 700px;
  align-items: stretch;
}

.card {
  flex: 1;
  margin: 0 10px;
  position: relative;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 14px;
    line-height: 2.0;
  }

  .card_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.circular-img-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.quote-container {
  width: 100px;
  height: 100px;
  position: absolute;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
    top: 50px;
    opacity: 0.2;
    transform: rotate(10deg);
  }
}
</style>
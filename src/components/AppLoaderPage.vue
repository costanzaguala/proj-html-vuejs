<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            loading : true
        };
     },
     methods:{
    },
    mounted(){
            setTimeout(() =>{
                this.loading = false
            }, 1000)
        
    }
    
}
</script>

<template>
    <div v-if="this.loading == true" class="loadingPage">
        <div class="spinner-container">
            <div class="spinner-border" role="status">
                <span class="spinner-img">
                    
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loadingPage{
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
}

.spinner-border {
    --bs-spinner-width: 12rem;
    --bs-spinner-height: 12rem;
    --bs-spinner-vertical-align: -0.125em;
    --bs-spinner-border-width: 0.25em;
    --bs-spinner-animation-speed: 1.5s;
    --bs-spinner-animation-name: spinner-border;
    border: 2px solid currentcolor;
    border-right-color: transparent;
}
.spinner-container{

    border-radius: 50%;
    background-image: url('../assets/img/loader-gobike.png');
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    overflow: hidden;
}
</style>
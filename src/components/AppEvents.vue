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


    <!--EVENTI-->

    <!--GRIGLIA A "RIGHE"-->
    
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
</style>
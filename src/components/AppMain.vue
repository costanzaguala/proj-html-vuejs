<script>
import { store } from '../store.js';
import MainCircle from './MainCircle.vue'
import 'swiper/css/navigation';

export default {
    data() {
        return {
            store,
        };
     },
}
</script>

<template>
    <main class="mb-4">
        <!-- Componente che mi permette di avere, per URL diversi, contenuti informativi diversi -->
        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>
</style>
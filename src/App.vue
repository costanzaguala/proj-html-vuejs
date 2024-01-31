<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppAbout from './components/AppAbout.vue';
import AppEvents from './components/AppEvents.vue';
import AppLoaderPage from './components/AppLoaderPage.vue';

import { store } from './store.js';

export default {
    data() {
        return {
             store,
        };
     },

    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppAbout,
        AppEvents,
        AppLoaderPage
    },

    methods: {

    }
}
</script>

<template>
    <AppLoaderPage/>
    
    <AppHeader/>

    <AppAbout/>

    <AppEvents/>

    <AppMain/>

    <AppFooter/>


</template>

<style lang="scss">
    @use "assets/scss/main.scss" as *;
    @use "assets/scss/partials/reset.scss" as *;;
</style>

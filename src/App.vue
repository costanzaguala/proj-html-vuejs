<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppPackages from './components/AppPackages.vue';
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
        AppLoaderPage,
        AppPackages
    },

    methods: {

    }
}
</script>

<template>

    <AppLoaderPage/>

    <AppHeader/>

    <AppMain/>

    <AppFooter/>

</template>

<style lang="scss">
    @use "assets/scss/main.scss" as *;
    @use "assets/scss/partials/reset.scss" as *;;
</style>

import { createApp } from 'vue';
import { router } from './router.js'
import App from './App.vue';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret)

/* ScrollReveal().reveal('.reveal');
console.log(ScrollReveal()) */
createApp(App).use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')


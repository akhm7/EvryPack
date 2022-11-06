import { createApp } from "vue";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faBox, faAngleRight, faHome, faShoppingBag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faBox, faAngleRight, faHome, faShoppingBag, faShoppingCart, faUser  )

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount("#app");

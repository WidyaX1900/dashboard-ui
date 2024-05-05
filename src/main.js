import { createApp } from 'vue'
// import App from './App.vue'
import FrontPage from './FrontPage.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faCar, faHomeAlt, faMoneyBills, faPeopleGroup, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCar, faHomeAlt, faMoneyBills, faPeopleGroup, fas, faArrowRight);
createApp(FrontPage).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");

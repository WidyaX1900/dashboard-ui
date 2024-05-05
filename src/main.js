import { createApp } from 'vue'
// import App from './App.vue'
import FrontPage from './FrontPage.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowRight, faCar, faHomeAlt, faMoneyBills, faPeopleGroup, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCar, faHomeAlt, faMoneyBills, faPeopleGroup, fas, faArrowRight, faSearch);
createApp(FrontPage).component("FontAwesomeIcon", FontAwesomeIcon).mount("#app");

import {createApp} from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/main.css";
import VueSocialSharing from 'vue-social-sharing'

createApp(App).use(VueSocialSharing).mount("#app");


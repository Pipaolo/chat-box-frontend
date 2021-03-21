import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExclamationCircle,
  faCheckCircle,
  faClipboard,
  faTrash,
  faDoorOpen,
  faPaperPlane,
  faCircleNotch,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import Router from "./routes";
import App from "./App.vue";

import "./index.css";

// Setup all the icons that we would need in the project
library.add(faExclamationCircle);
library.add(faCheckCircle);
library.add(faClipboard);
library.add(faTrash);
library.add(faDoorOpen);
library.add(faPaperPlane);
library.add(faCircleNotch);
library.add(faInfoCircle);

createApp(App).use(Router).mount("#app");

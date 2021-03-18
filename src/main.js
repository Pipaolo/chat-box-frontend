import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faExclamationCircle,
  faCheckCircle,
  faClipboard,
  faTrash,
  faDoorOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import Router from "./routes";
import App from "./App.vue";

import "./index.css";

library.add(faExclamationCircle);
library.add(faCheckCircle);
library.add(faClipboard);
library.add(faTrash);
library.add(faDoorOpen);
library.add(faPaperPlane);

createApp(App).use(Router).mount("#app");

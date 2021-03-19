import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import LoginPage from "./components/Login/LoginPage.vue";
import RegistrationPage from "./components/Registration/RegistrationPage.vue";
import UserPage from "./components/User/UserPage.vue";
import RoomPage from "./components/Room/RoomPage.vue";
import {
  checkAuth,
  loginAsAnonymous,
  useAuthentication,
} from "./modules/authentication";
import { joinRoom } from "./modules/room";
import { connect } from "./modules/websocket";
import { hideModal, showModal } from "./modules/modals";
import { generateRandomUser } from "./helpers/anonymous";

const routes = [
  {
    name: "Home",
    path: "/",
    component: LandingPage,
  },
  {
    name: "Register",
    path: "/register",
    component: RegistrationPage,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
    beforeEnter: (_, __, next) => {
      showModal("loading", {
        disableBackdropClick: true,
      });
      checkAuth().then((user) => {
        if (!user) {
          hideModal();
          next();
        } else {
          hideModal();
          next({ path: "user" });
        }
      });
    },
  },
  {
    name: "User",
    path: "/user",
    component: UserPage,
  },
  {
    name: "Room",
    path: "/room/:id",
    props: true,
    component: RoomPage,
    beforeEnter: async (to, __, next) => {
      const { id } = to.params;
      if (!id) {
        next({ path: "user", force: true });
      } else {
        showModal("loading", {
          disableBackdropClick: true,
        });

        // Check user
        let user = await checkAuth();

        if (!user) {
          console.log("alsdkfj");
          user = loginAsAnonymous();
        }

        let room = null;
        // Check if the user is logged in
        if (!user) {
          // Generate a random username
          room = await joinRoom(id, user);
        } else {
          room = await joinRoom(id, user);
        }

        if (room) {
          next();
        } else {
          next({ path: "user", force: true });
        }
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: LandingPage,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// Add route guards
router.beforeEach((to, _, next) => {
  const publicRoutes = ["Home", "Login", "Register", "Room"];

  if (!publicRoutes.find((p) => p === to.name)) {
    // Check for authentication
    checkAuth().then((user) => {
      if (!user) {
        next({ path: "login" });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import LoginPage from "./components/LoginPage.vue";
import RegistrationPage from "./components/RegistrationPage.vue";
import UserPage from "./components/User/UserPage.vue";
import RoomPage from "./components/Room/RoomPage.vue";
import { checkAuth, useAuthentication } from "./modules/authentication";
import { joinRoom } from "./modules/room";
import { connect } from "./modules/websocket";
import { hideModal, showModal } from "./modules/modals";

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
      checkAuth().then((user) => {
        if (!user) {
          next();
        } else {
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
        // Fetch room details
        const { user } = useAuthentication();
        const room = await joinRoom(id, user);
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
  if (to.path !== "/login" && to.path !== "/register") {
    // Check for authentication
    checkAuth().then((user) => {
      if (!user) {
        next({ path: "login" });
      } else {
        next();
      }
    });
  } else {
    console.log("nice");
    next();
  }
});

export default router;

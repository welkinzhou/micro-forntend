import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "vue app", // app name registered
    entry: "//localhost:8082",
    container: "#subapp-container",
    activeRule: "/app-vue",
  },
  {
    name: "angular app",
    entry: "//localhost:4200",
    container: "#subapp-container",
    activeRule: "/app-angular",
  },
]);

start();

const app = createApp(App);

app.use(router);

app.mount("#app");

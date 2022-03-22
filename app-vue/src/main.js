import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import "./public-path";

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  console.log(container);
  router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/"
    ),
    routes,
  });

  instance = createApp(App)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}

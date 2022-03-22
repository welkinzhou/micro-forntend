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

  instance = createApp(App);

  instance
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  instance.unmount();
  instance = null;
  router = null;
}

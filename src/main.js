import * as tComponents from "./components";

const install = Vue => {
  // set default options
  // Use Components
  Object.values(tComponents).forEach(tComponent => {
    Vue.use(tComponent);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;

export { default as tButton } from "./components/tButton";

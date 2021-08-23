import { render } from "./MyReact.js";
import Component from "./Component.js";

let propCount = 0;

const root = document.querySelector("#root");
const btnCount = document.querySelector("#btn-count");
const root_1 = document.querySelector("#root_1");
const btnCount_1 = document.querySelector("#btn-count_1");
const btnGroup = document.querySelector("#btn-group");

btnGroup.addEventListener("click", function () {
  propCount++;
  renderComponents();
});

function renderComponents() {
  render(Component, { propCount, btnEle: btnCount }, root);
  render(Component, { propCount, btnEle: btnCount_1 }, root_1);
}

renderComponents();

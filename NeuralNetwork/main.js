import "./styles/modern-normalize.css";
import "./styles/styles.css";
import "./styles/utils.css";

const graph = document.getElementById("graph");

const layers = [];
let i = 0;

const add = document.getElementById("add");
add.addEventListener("click", () => {
  if (i <= 5) {
    i++;
    let layer = document.createElement("div");
    layer.className = "layer";
    layer.id = `${i}`;
    graph.appendChild(layer);
    layers.push(layer);
  }
});

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  let layer = document.getElementById(`${i}`);
  if (i > 0) {
    graph.removeChild(layer);
    layers.pop;
    i--;
  }
});

const check = document.getElementById("check");
check.addEventListener("click", () => {
  console.log(layers);
});

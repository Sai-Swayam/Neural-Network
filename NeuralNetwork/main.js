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
    layer.innerHTML = `
      <div class="button_container">
        <button class="btn-s" id="add-${i}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </button>
        <button class="btn-s" id="rem-${i}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" width="1.5rem">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    `;
    layer.nodes = new Array();
    layer.j = 0;
    graph.appendChild(layer);
    layers.push(layer);
  }
});

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  let layer = document.getElementById(`${i}`);
  if (i > 0) {
    graph.removeChild(layer);
    layers.pop();
    i--;
  }
});

const check = document.getElementById("check");
check.addEventListener("click", () => {
  console.log(layers);
});

document.querySelector("#graph").addEventListener("click", (e) => {
  let btn_s = e.target.closest("button");
  if (btn_s.id.startsWith("add")) {
    let layer = e.target.closest("div").parentNode;
    if (layer.j < 8) {
      layer.j++;
      let node = document.createElement("div");
      node.className = "node";
      node.id = `node-${layer.j}`;
      layer.appendChild(node);
      layer.nodes.push(node);
    }
  } else if (btn_s.id.startsWith("rem")) {
    let layer = e.target.closest("div").parentNode;
    if (layer.j > 0) {
      let node = document.getElementById(`node-${layer.j}`);
      layer.removeChild(node);
      layer.nodes.pop();
      layer.j--;
    }
  }
});

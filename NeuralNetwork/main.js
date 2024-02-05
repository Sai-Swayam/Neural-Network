import "./styles/modern-normalize.css";
import "./styles/styles.css";
import "./styles/utils.css";

const graph = document.getElementById("graph");

const nodes = [];
let i = 0;

const add = document.getElementById("add");
add.addEventListener("click", () => {
  if (i <= 4) {
    i++;
    let node = document.createElement("div");
    node.className = "node";
    node.id = `${i}`;
    graph.appendChild(node);
  }
});

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  let node = document.getElementById(`${i}`);
  if (i > 0) {
    graph.removeChild(node);
    i--;
  }
});

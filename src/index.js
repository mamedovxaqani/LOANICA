import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.css";

import headerWrapper from "./components/HeaderWrapper/wrapper";

const root = document.getElementById("root");
window.addEventListener("DOMContentLoaded", () => {
  const domElements = [headerWrapper()];

  root.append(...domElements);
});

import { collapse } from "../../data/navigations";

function button() {
  // Создаем элемент <button>
  const button = document.createElement("button");

  button.classList.add("navbar-toggler", "collapsed");

  button.setAttribute("type", "button");
  button.setAttribute("data-toggle", "collapse");
  button.setAttribute("data-target", "#navbarNav");
  button.setAttribute("aria-controls", "#navbarNav");
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "Toggle navigation");

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-bars");

  button.appendChild(icon);

  button.addEventListener("click", () => {
    collapse.classList.toggle("show");
  });

  return button;
}

export default button;

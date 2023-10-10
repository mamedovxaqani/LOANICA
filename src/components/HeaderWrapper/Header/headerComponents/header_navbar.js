import defaultContainer from "../../../layouts/containers";
import headerLogo from "./header_logo";

function headerNavbar() {
  const navbarClasses = ["navbar", "navbar-expand-lg"];
  const nav = document.createElement("nav");
  const container = defaultContainer();

  container.classList.add("navbar-container");

  container.append(headerLogo());

  nav.classList.add(...navbarClasses);

  nav.append(container);
  return nav;
}

export default headerNavbar;

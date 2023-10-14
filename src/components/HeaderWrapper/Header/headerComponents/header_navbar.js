import defaultContainer from "../../../layouts/containers";
import headerLogo from "./header_logo";
import headerNav from "./header_nav";
import button from "../../../layouts/closeOpen";

function headerNavbar() {
  const navbarClasses = ["navbar", "navbar-expand-lg"];
  const nav = document.createElement("nav");
  const container = defaultContainer();

  container.classList.add("navbar-container");

  const headerElements = [headerLogo(), button(), headerNav()];

  container.append(...headerElements);

  nav.classList.add(...navbarClasses);

  nav.append(container);
  return nav;
}

export default headerNavbar;

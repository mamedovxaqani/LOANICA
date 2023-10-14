import headerList from "./header_lists";
import headerContact from "./header_contact";
import { collapse } from "../../../../data/navigations";

function headerNav() {
  const navClasses = ["collapse", "navbar-collapse", "justify-content-around"];

  const collapseElements = [headerList(), headerContact()];

  collapse.append(...collapseElements);

  collapse.setAttribute("id", "navbarNav");
  collapse.classList.add(...navClasses);

  return collapse;
}

export default headerNav;

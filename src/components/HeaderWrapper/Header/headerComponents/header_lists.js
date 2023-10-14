import { elem } from "../../../../data/navigations";
function headerList() {
  const ulClasses = ["navbar-nav", "menu-navbar-nav"];

  const ul = document.createElement("ul");

  const liElements = elem.map((element) => {
    const font = document.createElement("i");
    const navigationLi = document.createElement("li");
    const navigationA = document.createElement("a");
    navigationA.classList.add("nav-link");
    font.classList.add(...element.icons);
    navigationA.append(font);
    navigationA.append(element.title);
    navigationA.href = element.href;

    navigationLi.classList.add("nav-item");
    navigationLi.append(navigationA);

    return navigationLi;
  });

  ul.append(...liElements);
  ul.classList.add(...ulClasses);
  return ul;
}

export default headerList;

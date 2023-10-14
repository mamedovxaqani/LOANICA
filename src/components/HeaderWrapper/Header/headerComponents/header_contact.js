function headerContact() {
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.innerHTML = "Contact";
  link.classList.add("nav-link", "contact");
  li.append(link);
  li.classList.add("nav-item");
  ul.append(li);
  ul.classList.add("navbar-nav");

  return ul;
}

export default headerContact;

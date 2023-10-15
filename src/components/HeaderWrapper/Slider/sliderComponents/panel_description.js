function panelDescription(description) {
  const descr = document.createElement("p");

  descr.innerHTML = description;

  descr.classList.add("panel_description");

  return descr;
}

export default panelDescription;

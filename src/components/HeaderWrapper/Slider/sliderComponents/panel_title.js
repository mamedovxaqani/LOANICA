function panelTitle(title) {
  const pTitle = document.createElement("h1");

  pTitle.innerHTML = title;

  pTitle.classList.add("panel_title");

  return pTitle;
}

export default panelTitle;

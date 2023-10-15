function panelSubtitle(stitle) {
  const subtitle = document.createElement("p");

  subtitle.innerHTML = stitle;

  subtitle.classList.add("panel_subtitle");

  return subtitle;
}

export default panelSubtitle;

function cols(...classes) {
  const col = document.createElement("div");

  col.classList.add("col", ...classes);

  return col;
}

export default cols;

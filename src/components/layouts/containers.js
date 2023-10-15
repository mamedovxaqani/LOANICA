const container = (...classes) => {
  const container = document.createElement("div");

  container.classList.add("container", ...classes);

  return container;
};

export default container;

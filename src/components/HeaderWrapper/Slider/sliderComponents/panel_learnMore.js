function learnMoreBtn(buttonText) {
  const button = document.createElement("button");

  button.classList.add("learn-btn");

  button.innerHTML = buttonText;

  return button;
}

export default learnMoreBtn;

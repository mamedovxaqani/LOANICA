import Header from "./Header";
import Slider from "./Slider";

function headerWrapper() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const wrapperElements = [Header(), Slider()];

  wrapper.append(...wrapperElements);

  return wrapper;
}

export default headerWrapper;

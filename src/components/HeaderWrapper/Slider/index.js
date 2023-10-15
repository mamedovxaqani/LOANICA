import container from "../../layouts/containers";
import rows from "../../layouts/rows";
import cols from "../../layouts/cols";
import { panelTextObject } from "../../../data/navigations";

import panelTitle from "./sliderComponents/panel_title";
import panelSubtitle from "./sliderComponents/panel_subtitle";
import panelDescription from "./sliderComponents/panel_description";
import panelLearnButton from "./sliderComponents/panel_learnMore";
import panelImage from "./sliderComponents/panel_image";

function Slider() {
  const { title, subtitle, description, btnText } = panelTextObject;

  const colTwoElements = [
    panelSubtitle(subtitle),
    panelTitle(title),
    panelDescription(description),
    panelLearnButton(btnText),
  ];

  const sliderSection = document.createElement("section");
  sliderSection.classList.add("panel");

  const cont = container("panel-container");
  const row = rows();
  const colOne = cols("col-xl-7", "image");
  colOne.append(panelImage());

  const colTwo = cols("col-xl-5", "p-0");

  colTwo.append(...colTwoElements);

  cont.append(row);
  row.append(colOne, colTwo);

  sliderSection.append(cont);

  return sliderSection;
}

export default Slider;

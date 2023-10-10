
import headerNavbar from "./headerComponents/header_navbar";

function Header() {
  const header = document.createElement("header");

  header.append(headerNavbar());
  return header;
}

export default Header;

import logo from "../../../../assets/img/logo.png";

function headerLogo() {
  const navbarBrand = document.createElement("div");
  const navbarBrandLogo = document.createElement("a");
  const navbarBrandImage = new Image();

  navbarBrandImage.src = logo;

  navbarBrand.classList.add("navbar-brand");
  navbarBrandLogo.classList.add("navbar-brand-logo");

  navbarBrandLogo.append(navbarBrandImage);
  navbarBrand.append(navbarBrandLogo);

  return navbarBrand;
}

export default headerLogo;

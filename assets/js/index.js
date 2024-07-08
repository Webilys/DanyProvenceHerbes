//------MENU RESPONSIVE------
//Les constantes du menu
const nav = document.querySelector("nav");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");

//Ouverture du menu si clic sur l'icône d'ouverture du menu
function openNav() {
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
  nav.style.display = "block";
}

//fermeture du menu si clic sur l'icône d'ouverture
function closeNav() {
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
  nav.style.display = "none";
}

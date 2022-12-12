const burgerMenu = document.querySelector("header nav")
const formulaire = document.querySelector("footer + aside");

document.querySelector("header button").addEventListener("click", () => burger());

function burger() {
  burgerMenu.classList.toggle("activeMenu");
}

document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", () => {
    if (burgerMenu.className === "activeMenu") burger();
    if (formulaire.className === "active") form();
  });
});

function form() {
  formulaire.classList.toggle("active");
}

document.querySelector("section:nth-of-type(6) button").addEventListener("click", () => form());

document.querySelector("aside button:first-of-type").addEventListener("click", () => form());

if (window.location.hash === '#sent') alert("Votre mail a bien été envoyé.");
if (window.location.hash === '#error') alert("Une erreur s'est produite. Veuillez réessayer.");
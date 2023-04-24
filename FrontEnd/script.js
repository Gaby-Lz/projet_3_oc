
  fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: { "accept: application/json" },
    body: chargeUtile
});
const gallery = photos[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("figcaption");
nomElement.innerText = article.nom;

const  sectionGallery = document.querySelector(".gallery");

sectionGallery.appendChild(imageElement);
sectionGallery.appendChild(nomElement);



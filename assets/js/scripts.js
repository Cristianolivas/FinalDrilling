const imagenes = [
  {
    name: "imagen0",
    img: "./assets/image/matrix-7178709_1280.webp",
    github: "https://www.github.com",
  },
  {
    name: "imagen1",
    img: "./assets/image/technology-7111804_1280.jpg",
    github: "https://www.github.com",
  },
  {
    name: "imagen2",
    img: "./assets/image/technology-7111801_1280.jpg",
    github: "https://www.github.com",
  },
];

function modales(i) {
  const modal = document.querySelector("#exampleModal");
  console.log(modal);
  const h1 = modal.querySelector("h1");
  h1.innerHTML = imagenes[i].name;
  const img = modal.querySelector("img");
  img.setAttribute("src", imagenes[i].img);
  const a = modal.querySelector("a");
  a.setAttribute("href", imagenes[i].github);
}

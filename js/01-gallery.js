import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ""
);
gallery.insertAdjacentHTML("beforeend", markup);
const galleryImg = gallery.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );

  instance.show();

  gallery.addEventListener("keydown", onEscape);

  function onEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscape);
    }
  }
}
console.log(galleryItems);

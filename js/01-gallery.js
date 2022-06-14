import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><img class="gallery__image" src="${preview}" alt="${description}"></div>`;
    })
    .join(' ');
  return markup;
}

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItemsMarkup;

console.log(galleryItemsMarkup);

// console.log(galleryItems);

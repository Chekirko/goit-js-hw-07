import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
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

galleryEl.addEventListener('click', onImageClick);
function onImageClick(event) {
  const bigImage = galleryItems.find(item => item.description === event.target.getAttribute('alt'));
  const instance = basicLightbox.create(`
    <img src="${bigImage.original}" width="800" height="600">
`);

  instance.show();
}

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// console.log(galleryItems);

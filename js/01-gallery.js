import { galleryItems } from './gallery-items.js';

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

// Рішення по ТЗ

function createGalleryItemsMarkup(arr) {
  const markup = arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(' ');
  return markup;
}

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = galleryItemsMarkup;

galleryEl.addEventListener('click', onImageClick);
function onImageClick(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  instance.show();
}

document.addEventListener('keydown', onModalEsc);

function onModalEsc(event) {
  if (event.code !== 'Esc') {
    return;
  }
}

// Рішення не по ТЗ

// function createGalleryItemsMarkup(arr) {
//   const markup = arr
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item"><img class="gallery__image" src="${preview}" alt="${description}"></div>`;
//     })
//     .join(' ');
//   return markup;
// }

// const galleryEl = document.querySelector('.gallery');
// galleryEl.innerHTML = galleryItemsMarkup;

// galleryEl.addEventListener('click', onImageClick);
// function onImageClick(event) {
//   const bigImage = galleryItems.find(item => item.description === event.target.getAttribute('alt'));
//   const instance = basicLightbox.create(`
//     <img src="${bigImage.original}" width="800" height="600">
// `);

//   instance.show();
// }

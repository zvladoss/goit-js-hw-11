import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api';
import { renderImage } from './js/render-functions';
const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  galleryLink: document.querySelector('.gallery-link'),
};
//* LOADER

const loaderBox = document.createElement('div');
loaderBox.classList.add('loader-box');

const loader = document.createElement('span');
loader.classList.add('loader');

loaderBox.appendChild(loader);

document.body.insertBefore(loaderBox, refs.searchForm.nextSibling);

const showLoader = loaderBox.classList.add('visible');
const hideLoader = loaderBox.classList.remove('visible');

// *
// console.dir(refs.searchForm);
// console.dir(refs.searchInput);
const onFormSubmit = event => {
  event.preventDefault();

  const formValue = refs.searchInput.value.trim();

  if (!formValue) {
    iziToast.error({
      message: 'Error!',
    });
    return;
  }

  refs.searchForm.reset();

  getPhotos(formValue)
    .finally.then(data => {
      if (data.hits.length === 0) {
        return;
      }
      const addGalleryItem = data.hits.map(hit => renderImage(hit)).join('');
      refs.gallery.insertAdjacentHTML('beforeend', addGalleryItem);
      console.log(addGalleryItem);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    });
};
refs.searchForm.addEventListener('submit', onFormSubmit);

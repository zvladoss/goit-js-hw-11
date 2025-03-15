import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api';
import { updateGallery } from './js/render-functions';
const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
};

//* LOADER

const loaderBox = document.createElement('div');
loaderBox.classList.add('loader-box');

const loader = document.createElement('span');

loaderBox.appendChild(loader);

document.body.insertBefore(loaderBox, refs.searchForm.nextSibling);

const showLoader = () => loaderBox.classList.add('loader');
const hideLoader = () => loaderBox.classList.remove('loader');
// *

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

  showLoader();
  getPhotos(formValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong. Please try again later!',
          position: 'topRight',
        });
        return;
      }

      updateGallery(refs.gallery, data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());
};
refs.searchForm.addEventListener('submit', onFormSubmit);

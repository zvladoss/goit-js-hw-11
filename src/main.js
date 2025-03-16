import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api';
import { updateGallery } from './js/render-functions';
import icon from './img/icon.svg';
const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loaderBox: document.querySelector('.loader-box'),
};

//* LOADER

// const loaderBox = document.createElement('div');
// loaderBox.classList.add('loader-box');

// const loader = document.createElement('span');
// loader.classList.add('loader');

// loaderBox.appendChild(refs.loader);

// document.body.insertBefore(loaderBox, refs.searchForm.nextSibling);
const showLoader = () => refs.loaderBox.classList.add('loader');
const hideLoader = () => refs.loaderBox.classList.remove('loader');
// *

const onFormSubmit = event => {
  event.preventDefault();

  const formValue = refs.searchInput.value.trim();

  if (!formValue) {
    return;
  }

  refs.searchForm.reset();

  refs.gallery.innerHTML = '';

  showLoader();
  getPhotos(formValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          titleColor: '#ffffff',
          messageColor: '#ffffff',
          backgroundColor: '#ef4040',
          progressBarColor: '#B51B1B',
          position: 'topRight',
          iconUrl: icon,
        });
        return;
      }

      updateGallery(refs.gallery, data.hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: `${error}`,
        position: 'topRight',
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#ef4040',
        progressBarColor: '#B51B1B',
        position: 'topRight',
        iconUrl: icon,
        timeout: false,
      });
    })
    .finally(() => hideLoader());
};
refs.searchForm.addEventListener('submit', onFormSubmit);

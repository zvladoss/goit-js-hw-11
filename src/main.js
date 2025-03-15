import iziToast from 'izitoast';
import { getPhotos } from './js/pixabay-api';

const refs = {
  searchForm: document.querySelector('form'),
  searchInput: document.querySelector('[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
};
console.dir(refs.searchForm);
console.dir(refs.searchInput);
const onFormSubmit = event => {
  event.preventDefault();

  const formValue = refs.searchInput.value.trim();
  if (formValue === '') {
    iziToast.error({
      message: 'Error!',
    });

    return;
  }

  getPhotos(formValue)
    .then(data => {
      if (data.hits.length === 0) {
        return;
      }
      console.dir(data);
    })
    .catch(error => {
      alert('Something went wrong. Please try again later.');
      console.log(error);
    });
};
refs.searchForm.addEventListener('submit', onFormSubmit);

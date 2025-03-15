import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

export const renderImage = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info-wrap">
        <p class="gallery-info">Likes: ${likes}</p>
        <p class="gallery-info">Views: ${views}</p>
        <p class="gallery-info">Comments: ${comments}</p>
        <p class="gallery-info">Downloads: ${downloads}</p>
        </div>        
      </li>
    `;
};

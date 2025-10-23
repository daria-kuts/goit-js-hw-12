import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const gallery = document.querySelector('.gallery');

  const markup = images.map(image => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
          <div class="info">
            <p><span class="info-title">Likes:</span> ${image.likes}</p>
            <p><span class="info-title">Views:</span> ${image.views}</p>
            <p><span class="info-title">Comments:</span> ${image.comments}</p>
            <p><span class="info-title">Downloads:</span> ${image.downloads}</p>
          </div>
        </a>
      </li>
    `;
  }).join(''); 
  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
const gallery = document.querySelector('.gallery');
gallery.innerHTML = '';  
};

export function showLoader() {
const loader = document.querySelector('.loader');
loader.classList.add('visible');
};

export function hideLoader() {
const loader = document.querySelector('.loader');
loader.classList.remove('visible'); 
};

export function showLoadMoreButton() {
    const loadMore = document.querySelector('.loadmore');
    loadMore.classList.add('visible');
};

export function hideLoadMoreButton() {
    const loadMore = document.querySelector('.loadmore');
    loadMore.classList.remove('visible');
}
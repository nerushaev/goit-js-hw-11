const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
  buttonLoadMore: document.querySelector('.load-more'),
  buttonPageTop: document.querySelector('.page-up'),
  outputPagesLoad: document.querySelector('.pages-load'),
}

const api = {
  BASE_URL: 'https://pixabay.com/api/',
  KEY: '20435955-d6e5a5505e0396473152579ed',
};
export { refs, api };
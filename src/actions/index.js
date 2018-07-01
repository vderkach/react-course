export function openAnImage() {
  console.log('action openAnImage');
  return {
    type: 'IMAGE_OPENED',
    imageOpened: true
  }
}

export function closeAnImage() {
  console.log('action openAnImage');
  return {
    type: 'IMAGE_CLOSED',
    imageOpened: false
  }
}

export function searchClickedAction(url) {
  return {
    type: 'SEARCH_CLICKED',
    url
  }
}

export function updateSearchText(e){
  const API_URL = 'https://pixabay.com/api/?key=9335051-03222e3f37313e655b505bd68&q=';
  const requestText = encodeURIComponent(e.target.value);
  return {
    type: 'UPDATE_TEXT',
    url: API_URL + requestText
  }
}

export function fetchImages(images) {
  return {
    type: 'FETCH_IMAGES',
    images: images.hits
  }
}

export function fetchAPI(url) {
  return dispatch => {
    dispatch(searchClickedAction(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(fetchImages(json)))
  }
}